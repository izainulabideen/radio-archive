import matter from "gray-matter";
import { Footer } from "../interfaces/footer";

const footerPath = `${import.meta.env.BASE_URL}_common/footer.md`;

export async function getFooterData() {
  try {
    const response = await fetch(footerPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch footer: ${response.statusText}`);
    }
    const fileContents = await response.text();
    const { data: frontmatter, content } = matter(fileContents);

    return { ...frontmatter, content } as unknown as Footer;
  } catch (error) {
    console.error(error);
    return null;
  }
}
