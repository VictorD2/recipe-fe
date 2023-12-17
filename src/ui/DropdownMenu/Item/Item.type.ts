import { ReactNode } from "react";
import { ButtonProps } from "@/ui/Button/Button.type";

export type ItemProps = {
  children?: ReactNode;
} & ButtonProps;
