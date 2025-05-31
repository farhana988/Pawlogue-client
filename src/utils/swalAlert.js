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
