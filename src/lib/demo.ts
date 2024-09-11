import matter from "gray-matter";
import { Demo } from "../interfaces/demo";

const demoPath = `${import.meta.env.BASE_URL}_common/demo.md`;

export async function getDemoData() {
  try {
    const response = await fetch(demoPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch demo: ${response.statusText}`);
    }
    const fileContents = await response.text();
    const { data: frontmatter, content } = matter(fileContents);

    return { ...frontmatter, content } as unknown as Demo;
  } catch (error) {
    console.error(error);
    return null;
  }
}
