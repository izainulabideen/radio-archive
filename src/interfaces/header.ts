export interface Header {
  content: string;
  logo: string;
  menu: {
    linkText: string;
    url: string;
  }[];
  rightMenu: {
    linkText: string;
    url: string;
  }[];
}
