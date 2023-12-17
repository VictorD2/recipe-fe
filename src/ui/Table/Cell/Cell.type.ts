import { BackgroundColorType, FontType, SeparatorType } from "@/styles/types";
import { ReactNode } from "react";

export interface CellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
  font?: FontType;
  separator?: SeparatorType;
  bgColor?: BackgroundColorType;
}
