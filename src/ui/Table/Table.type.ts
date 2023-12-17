import { ReactNode } from "react";
import { ColumnType } from "./Column/Column.type";
import { SizeType } from "@/styles/types";

export interface TableProps<T>
  extends React.TableHTMLAttributes<HTMLTableElement> {
  columns?: ColumnType[];
  rows?: ReactNode;
  permissionCodeSwitch?: string;
  actions?: ReactNode;
  count?: number;
  loading?: boolean;
  selectedValues?: T[];
  showCheck?: boolean;
  size?: SizeType;
  stateColumn?: boolean;
  stateField?: string;
  emptyMessage?: string;
  eventChangeState?: Function;
  showIndex?: boolean;
  getSelectedRows?: (value: T[]) => void;
}
