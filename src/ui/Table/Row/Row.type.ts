import { BackgroundColorType, BorderType } from "@/styles/types";
import { ReactNode } from "react";

export interface RowProps<T> extends React.HTMLAttributes<HTMLTableRowElement> {
  index?: number;
  bgColor?: BackgroundColorType;
  border?: BorderType;
  children: ReactNode;
}
