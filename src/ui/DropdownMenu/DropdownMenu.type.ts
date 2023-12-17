import {
  BackgroundColorType,
  BorderType,
  SeparatorType,
  SizeType,
} from "@/styles/types";
import { ReactNode } from "react";

export type DropdownMenuProps = {
  bgColor?: BackgroundColorType;
  buttonNode: ReactNode;
  border?: BorderType;
  children: ReactNode;
  positionAbs?: string;
  separator?: SeparatorType;
  size?: SizeType;
  show?: boolean;
};
