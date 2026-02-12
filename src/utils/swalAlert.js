import Swal from "sweetalert2";

export const swalAlert = ({
  type = "success",
  title = "",
  position = "top-end",
  timer = 1500,
}) => {
  if (type === "success") {
    Swal.fire({
      position,
      icon: "success",
      title: title || "Success!",
      showConfirmButton: false,
      timer,
    });
  } else if (type === "error") {
    Swal.fire({
      icon: "error",
      title: title || "Error!",
      text: "Something went wrong. Please try again!",
      confirmButtonText: "Try Again",
    });
  }
};

// Confirmation

export const swalConfirm = async ({
  title = "Are you sure?",
  text = "You won't be able to revert this!",
  icon = "warning",
  confirmButtonText = "Yes",
  cancelButtonText = "Cancel",
  confirmButtonColor = "#3085d6",
  cancelButtonColor = "#d33",
}) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    confirmButtonColor,
    cancelButtonColor,
  });

  return result.isConfirmed;
};
