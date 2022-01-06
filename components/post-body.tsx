import classNames from "classnames";
import markdownStyles from "../styles/markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className={classNames(markdownStyles["markdown"], "mb-8")}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
