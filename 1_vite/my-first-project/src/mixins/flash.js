import swal from "sweetalert"

export default {
    methods: {
        flash(message) {
            return swal('Success!', message, 'success');
        }
    }
}

//Merged into a single vue component that is importing this