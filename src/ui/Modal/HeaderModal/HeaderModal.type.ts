import {
  BackgroundColorType,
  BorderType,
  FontType,
  SeparatorType,
  SizeType,
} from "@/styles/types";

export type HeaderModalProps = {
  bgColor?: BackgroundColorType;
  remixicon?: string;
  text?: string;
  border?: BorderType;
  xIcon?: boolean;
  onClose: Function;
  separator?: SeparatorType;
  font?: FontType;
  size?: SizeType;
};
