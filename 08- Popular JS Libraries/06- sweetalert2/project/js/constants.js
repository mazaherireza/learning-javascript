const INTERVAL = 2_500;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  width: "30%",
  timer: INTERVAL,
  showConfirmButton: false,
  timerProgressBar: true,
  color: "black",
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export { Toast };
