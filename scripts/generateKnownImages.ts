import * as fs from "fs";
import * as Mustache from "mustache";
import * as path from "path";

const INPUT_PATH = "./public/assets";
const OUTPUT_PATH = "./generated/images.ts";
const TEMPLATE_PATH = "./scripts/templates/images.mustache";
const WHITELISTED_EXTENSIONS = [".png", ".jpg"];
const ONE_X_SUFFIX = "@1x";
const TWO_X_SUFFIX = "@2x";

interface MustacheImageMetadata {
  pathReference: string;
  path1x: string;
  path2x: string;
  variableName1x: string;
  variableName2x: string;
  enumName: string;
}

function generateKnownImages(inputPath: string, outputPath: string): void {
  const imagePaths = crawlImagePaths(inputPath);
  const mustacheImageMetadata = createMustacheImageMetadata(
    inputPath,
    imagePaths
  );
  const template = fs.readFileSync(TEMPLATE_PATH, "utf8");
  const output = Mustache.render(template, {
    images: mustacheImageMetadata,
  });
  fs.writeFileSync(outputPath, output);
}

function crawlImagePaths(
  dir: string,
  whitelistedExtensions = WHITELISTED_EXTENSIONS
): string[] {
  const imagePaths: string[] = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.lstatSync(fullPath);
    const ext = path.extname(file);
    if (stats.isDirectory()) {
      imagePaths.push(...crawlImagePaths(fullPath, whitelistedExtensions));
    } else if (whitelistedExtensions.includes(ext)) {
      imagePaths.push(fullPath);
    }
  }
  return imagePaths;
}

function createMustacheImageMetadata(
  inputPath: string,
  imagePaths: string[]
): MustacheImageMetadata[] {
  const paths1X: Map<string, string> = new Map();
  const paths2X: Map<string, string> = new Map();

  for (const imagePath of imagePaths) {
    const parsedPath = path.parse(imagePath);
    if (parsedPath.name.endsWith(ONE_X_SUFFIX)) {
      paths1X.set(removeFileNameSuffix(parsedPath, ONE_X_SUFFIX), imagePath);
    } else if (parsedPath.name.endsWith(TWO_X_SUFFIX)) {
      paths2X.set(removeFileNameSuffix(parsedPath, TWO_X_SUFFIX), imagePath);
    }
  }

  const allPaths: string[] = Array.from(
    new Set([...Array.from(paths1X.keys()), ...Array.from(paths2X.keys())])
  );

  return allPaths.map((imagePath) => {
    const path1X = paths1X.get(imagePath);
    const path2X = paths2X.get(imagePath);
    if (path1X == null) {
      throw new Error(`Only found a 2x image for path ${imagePath}`);
    } else if (path2X == null) {
      throw new Error(`Only found a 1x image for path ${imagePath}`);
    }
    return createSingleMustacheImageMetadata(
      inputPath,
      imagePath,
      path1X,
      path2X
    );
  });
}

function createSingleMustacheImageMetadata(
  inputPath: string,
  imagePath: string,
  path1x: string,
  path2x: string
): MustacheImageMetadata {
  const pathReference = path.relative(inputPath, imagePath);
  const words = pathReference.split(/[-_./\s]+/);
  const variableName = words
    .map((word, i) =>
      i > 0
        ? word[0].toUpperCase() + word.substring(1).toLowerCase()
        : word.toLowerCase()
    )
    .join("");
  const variableName1x = variableName + "_1x";
  const variableName2x = variableName + "_2x";
  const enumName = words.join("_").toUpperCase();
  return {
    pathReference,
    path1x,
    path2x,
    variableName1x,
    variableName2x,
    enumName,
  };
}

function removeFileNameSuffix(
  parsedPath: path.ParsedPath,
  suffix: string
): string {
  const { dir, name, ext } = parsedPath;
  return path.join(dir, name.substring(0, name.length - suffix.length) + ext);
}

if (require.main === module) {
  generateKnownImages(INPUT_PATH, OUTPUT_PATH);
}
