import matter from "gray-matter";
import { AboutPage } from "../interfaces/about";

const aboutPath = `${import.meta.env.BASE_URL}_about/about.md`;

export async function getAboutData(): Promise<AboutPage | null> {
  try {
    const response = await fetch(aboutPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch about: ${response.statusText}`);
    }
    const fileContents = await response.text();
    
    const { data: frontmatter, content } = matter(fileContents);
    
    return { ...frontmatter, content } as unknown as AboutPage;
  } catch (error) {
    console.error(error);
    return null;
  }
}
