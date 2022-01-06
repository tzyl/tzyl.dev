import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PageHeader from "./page-header";

type Props = {
  title: string;
  date: string;
  coverImage: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PageHeader>{title}</PageHeader>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
