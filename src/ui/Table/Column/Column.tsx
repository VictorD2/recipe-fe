import { classNames, mergeObjects } from "@/shared/utils/helpers";
import Container from "@/ui/Container";
import Icon from "@/ui/Icon";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { ColumnProps } from "./Column.type";
import { defaultBorder, defaultFont, defaultSeparator } from "./Column.default";

const Column: FC<ColumnProps> = (props) => {
  const {
    border = {},
    font = {},
    separator = {},
    text,
    className = "",
    ...rest
  } = props;

  const borderStyle = mergeObjects(defaultBorder, border);
  const fontStyle = mergeObjects(defaultFont, font);
  const separatorStyle = mergeObjects(defaultSeparator, separator);

  return (
    <th
      className={classNames(
        separatorStyle.padding,
        borderStyle.size,
        fontStyle.size,
        fontStyle.color,
        className,
        text?.width + "",

        "text-left uppercase tracking-wider",
          // ? "border-b-2 border-b-primary"
          // : borderStyle.size
      )}
      {...rest}
    >
      <Container
        size={{ width: "w-full", height: "h-full" }}
        display="flex"
        gap="gap-3"
        align="items-center"
        justify={text?.center ? "justify-center" : "justify-start"}
      >
        {text?.label}
        {/* {text?.orderBy && (
          <Container
            display="flex"
            position="relative"
            flexDirection="flex-col"
            align="items-center"
            justify="justify-center"
            size={{ height: "h-full" }}
          >
            <Icon
              remixicon="ri-arrow-up-s-fill"
              data-title={text.field}
              data-type={text.type}
              data-order="asc"
              className={classNames(
                "w-4 h-4",
                watch("field") === text.field && watch("order") === "asc"
                  ? "text-black"
                  : "text-gray-400"
              )}
            />
            <Icon
              onClick={handleClickChevronDown}
              remixicon="ri-arrow-down-s-fill"
              data-title={text.field}
              data-type={text.type}
              data-order="desc"
              className={classNames(
                "w-4 h-4",
                watch("field") === text.field && watch("order") === "desc"
                  ? "text-black"
                  : "text-gray-400"
              )}
            />
          </Container>
        )} */}
      </Container>
    </th>
  );
};

export default Column;
