import { KnownImagePath } from "../generated/images";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PageHeader from "./page-header";

type Props = {
  title: string;
  date: string;
  coverImagePath: KnownImagePath;
};

const PostHeader = ({ title, coverImagePath, date }: Props) => {
  return (
    <>
      <PageHeader>{title}</PageHeader>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} imagePath={coverImagePath} />
      </div>
    </>
  );
};

export default PostHeader;
