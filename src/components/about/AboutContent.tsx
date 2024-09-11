import { useEffect } from "react";
import { useFontConfig } from "../../context/FontProvider";
import Content from "../Content";

function AboutContent({ content }: { content: string | undefined }) {
  const { fontConfig } = useFontConfig();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      h2, h3, h4, h5, h6 {
        font-family: ${fontConfig?.specificFontName || "inherit"};
      }
      h2 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        text-align: center;
      }

      h3 {
        text-align: center;
      }

      p {
        text-align: center;
      }

      strong {
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      a:hover {
        text-decoration: underline;
      }

      a.underline {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [fontConfig]);

  return (
    <div className="px-4 md:px-10 py-12">
      <div className="max-w-2xl mx-auto">
        <Content data={content || ""} />
      </div>
    </div>
  );
}

export default AboutContent;
