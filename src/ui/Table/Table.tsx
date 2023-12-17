import { TableProps } from "./Table.type";
import { mergeObjects } from "@/shared/utils/helpers";
import Container from "../Container";
import Column from "./Column";
import { defaultSize } from "./Table.default";

const Table = <T extends {}>(props: TableProps<T>) => {
  const {
    emptyMessage = "No data",
    size = {},
    permissionCodeSwitch,
    showIndex = true,
    loading = false,
    stateColumn = false,
    stateField = "state",
    showCheck = false,
    getSelectedRows,
    selectedValues = [],
    eventChangeState,
    columns = [],
    count = 0,
    rows = <></>,
    ...rest
  } = props;

  const sizeStyle = mergeObjects(defaultSize, size);

  return (
    <Container
      size={{
        width: "w-24",
        minWidth: "min-w-full",
        height: sizeStyle.height,
      }}
      position="relative"
      border={{ size: "border-x-2 border-b-2", color: "border-gray-200" }}
      className="overflow-hidden"
    >
      <Container size={sizeStyle} className="overflow-auto relative">
        <table
          className="rounded-b-md min-w-full relative divide-y divide-gray-200"
          {...rest}
        >
          <thead className="bg-gray-50 ">
            <tr>
              {columns.map((item, i) => {
                return <Column text={item} key={item.label + i} />;
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </Container>
    </Container>
  );
};

export default Table;
