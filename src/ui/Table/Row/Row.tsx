import Container from "@/ui/Container";
import { RowProps } from "./Row.type";

const Row = <T extends Record<string, string>>(props: RowProps<T>) => {
  const { index = 0, children, border, bgColor, ...rest } = props;

  return (
    <Container as="tr" bgColor={bgColor} border={border} {...rest}>
      {children}
    </Container>
  );
};

export default Row;
