require('./bootstrap');

import Turbolinks  from 'turbolinks'

window.Turbolinks = Turbolinks
Turbolinks.start()

import Swal from 'sweetalert2'

window.Swal = Swal

window.Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.toastr = require('toastr')
