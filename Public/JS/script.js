
function show() {

    document.getElementById('menu-bar').style.cssText = "left:0%!important;";
    document.getElementById('click').className = "fa fa-times icon";
    document.getElementById('click').setAttribute("onclick", "hide()");

}

function hide() {

    document.getElementById('menu-bar').style.cssText = "left:-100%!important;";
    document.getElementById('click').className = "fa fa-bars icon";
    document.getElementById('click').setAttribute("onclick", "show()");

}

const pass = document.getElementById('pass')
const confirmPass = document.getElementById('confirm')

const register = document.getElementById('register')
const email = document.getElementById('email')
register.addEventListener('click', checkingConfrimPassword)


function checkingConfrimPassword() {


    if (pass.value != confirmPass.value) {
        alert('the password and confirm password are not same')
    } else if (pass.value != '' && confirmPass != '' && pass.value === confirmPass.value) {
        alert('signed in sucessfully now go to login page and log yourself in ')
        module.exports = [email.value, pass.value, confirmPass.value]
    } else {
        alert('empty fields')
    }
}
