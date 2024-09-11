import matter from "gray-matter";
import { Header } from "../interfaces/header";

const headerPath = `${import.meta.env.BASE_URL}_common/header.md`;

export async function getHeaderData(): Promise<Header | null> {
  try {
    const response = await fetch(headerPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch header: ${response.statusText}`);
    }
    const fileContents = await response.text();
    const { data: frontmatter, content } = matter(fileContents);

    return { ...frontmatter, content } as unknown as Header;
  } catch (error) {
    console.error(error);
    return null;
  }
}
