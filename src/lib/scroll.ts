export const scrollToSection = (id: string) => {
  const productsSection = document.getElementById(id);
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth" });
  }
};
