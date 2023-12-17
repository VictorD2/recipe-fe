import { BorderType, FontType, SeparatorType } from "@/styles/types";

export interface ColumnProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  text?: ColumnType;
  separator?: SeparatorType;
  border?: BorderType;
  font?: FontType;
}

export type ColumnType = {
  label: string;
  width: string;
  center: boolean;
};
