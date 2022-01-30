import classNames from "classnames";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import markdownStyles from "../styles/markdown-styles.module.css";
import MdxImage from "./mdx-image";

type Props = {
  mdxSource: MDXRemoteSerializeResult;
};

const PostBody = ({ mdxSource }: Props) => {
  return (
    <div className={classNames(markdownStyles["markdown"], "mb-8")}>
      <MDXRemote
        {...mdxSource}
        components={{
          img: MdxImage,
        }}
      />
    </div>
  );
};

export default PostBody;
