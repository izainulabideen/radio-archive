import matter from "gray-matter";
import { HomePage } from "../interfaces/home";

const homePath = `${import.meta.env.BASE_URL}_home/home.md`;

export async function getHomeData(): Promise<HomePage | null> {
  try {
    const response = await fetch(homePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch home page: ${response.statusText}`);
    }
    const fileContents = await response.text();
    const { data: frontmatter, content } = matter(fileContents);

    return { ...frontmatter, content } as unknown as HomePage;
  } catch (error) {
    console.error(error);
    return null;
  }
}
