const getValue = (object: any, property: string): string => {
  try {
    const properties = property.split(".");
    let newProperty = "";
    if (properties.length >= 2) {
      properties.forEach((prop, index) => {
        if (index !== 0) newProperty += prop + ".";
      });
      newProperty = newProperty.slice(0, -1);
      return getValue(object[properties[0]], newProperty);
    }
    return object[property];
  } catch (error) {
    return "";
  }
};

export const orderArrayByField = (
  field: string,
  order: "asc" | "desc",
  type: "number" | "string",
  array: any[]
) => {
  const unSortedArray = [...array];
  const sortedArray = unSortedArray.sort((item1, item2) => {
    if (type === "number") {
      if (order === "asc")
        return (
          parseFloat(`${getValue(item1, field)}`) -
          parseFloat(`${getValue(item2, field)}`)
        );
      if (order === "desc")
        return (
          parseFloat(`${getValue(item2, field)}`) -
          parseFloat(`${getValue(item1, field)}`)
        );
    }
    if (order === "asc") {
      if (`${getValue(item1, field)}` < `${getValue(item2, field)}`) return -1;
      if (`${getValue(item1, field)}` > `${getValue(item2, field)}`) return 1;
    }
    if (order === "desc") {
      if (`${getValue(item1, field)}` > `${getValue(item2, field)}`) return -1;
      if (`${getValue(item1, field)}` < `${getValue(item2, field)}`) return 1;
    }
    return 0;
  });
  return sortedArray;
};
