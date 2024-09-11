import matter from "gray-matter";
import { Testimonial } from "../interfaces/testimonial";

const testimonialPath = `${import.meta.env.BASE_URL}_common/testimonial.md`;

export async function getTestimonialData() {
  try {
    const response = await fetch(testimonialPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch testimonial: ${response.statusText}`);
    }
    const fileContents = await response.text();
    const { data: frontmatter, content } = matter(fileContents);

    return { ...frontmatter, content } as unknown as Testimonial;
  } catch (error) {
    console.error(error);
    return null;
  }
}