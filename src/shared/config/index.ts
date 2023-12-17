export const toastConfig = (
  message: string,
  type: "warning" | "error" | "success"
) => {
  return {
    render: message,
    type,
    isLoading: false,
    autoClose: 2000,
    closeButton: true,
    draggable: true,
  };
};
