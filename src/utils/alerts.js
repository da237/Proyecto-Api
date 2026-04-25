import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

export function success(msg) {
  Toast.fire({ icon: 'success', title: msg })
}

export function error(msg) {
  Toast.fire({ icon: 'error', title: msg })
}