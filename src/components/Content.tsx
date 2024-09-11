import markdownStyles from "../markdown-styles.module.css";
import { useEffect, useState } from "react";
import markdownToHtml from "../lib/markdownToHtml";

function Content({ data }: { data: string }) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const convertMarkdown = async () => {
      const htmlContent = await markdownToHtml(data || "");
      setContent(htmlContent);
    };

    convertMarkdown();
  }, [data]);

  return (
    <div
      id="markdown"
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default Content;
