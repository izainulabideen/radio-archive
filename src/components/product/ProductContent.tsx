import markdownStyles from "../../markdown-styles.module.css";
import markdownToHtml from "../../lib/markdownToHtml";
import { useEffect, useState } from "react";

function ProductContent({ data }: { data: string }) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const convertMarkdown = async () => {
      const htmlContent = await markdownToHtml(data || "");
      setContent(htmlContent);
    };

    convertMarkdown();
  }, [data]);

  return (
    <div className="max-w-3xl">
      <div className="px-4 md:px-10 py-12">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}

export default ProductContent;
