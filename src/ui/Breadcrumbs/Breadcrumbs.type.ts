import { DisplayType, FontType, TextColorType } from "@/styles/types";

export type LinkType = {
  link: string;
  name: string;
};

export type BreadcrumbsProps = {
  colorFirst?: TextColorType;
  font?: FontType;
  display?: DisplayType;
  routes: LinkType[];
};
