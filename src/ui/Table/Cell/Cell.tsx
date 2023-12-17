import { FC } from "react";
import { CellProps } from "./Cell.type";
import Container from "@/ui/Container";
import { mergeObjects } from "@/shared/utils/helpers";
import { defaultSeparator } from "./Cell.default";

const Cell: FC<CellProps> = (props) => {
  const {
    children,
    bgColor = "bg-transparent",
    separator = {},
    font = {},
    ...rest
  } = props;

  const separatorStyle = mergeObjects(defaultSeparator, separator);

  return (
    <Container
      as="td"
      separator={separatorStyle}
      {...rest}
      font={font}
      bgColor={bgColor}
    >
      {children}
    </Container>
  );
};

export default Cell;
