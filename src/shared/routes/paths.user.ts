import { ItemGroupType } from "@/shared/layouts/DashboardLayout/Sidebar/ItemGroup/ItemGroup.type";
import pathsRouter from "./paths";

export const paths: Array<ItemGroupType> = [
  {
    separator: "",
    items: [
      {
        slug: "Mis recetas",
        link: pathsRouter.myRecipes,
        remixicon: "ri-home-5-line",
        code: "",
        children: [],
      },
    ],
  },
];
