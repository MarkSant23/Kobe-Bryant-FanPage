function validacija() {

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    if (name.value.trim() == '') {
        name.style.border = 'solid 2px red';
        return false;
    }
    if (pass.value.trim().lenght < 6) {
        pass.style.border = '2 px solid red';
        return false;
    } else if (email.value.trim() == '') {
        email.style.border = 'solid 2px red';
        return false;
    } else if (pass.value.trim() == '') {
        pass.style.border = '1px solid red';
        return false;
    } else {
        return true;
    }

}