function validarFormulario (event) {
    event.preventDefault();
    
    const email = window.document.getElementById('email');
    const password = window.document.getElementById('password');
    const confirmPassword = window.document.getElementById("confirmPassword");
    
    const messageEmail= window.document.getElementsByClassName("message-email");
    const messagePassword = window.document.getElementsByClassName('message-password');
    const messageConfirmPassword = window.document.getElementsByClassName('message-confirmPassword')
    const messageCheckPassword = window.document.getElementsByClassName('message-fields-pswd')

    if(email.value == '') {
        email.classList.add('error');
        messageEmail[0].classList.add('mostra-a-mensagem-de-erro');
    } else {
        email.classList.remove('error');
        messageEmail[0].classList.remove('mostra-a-mensagem-de-erro')
    }

    if(password.value == '') {
        password.classList.add('error');
        messagePassword[0].classList.add('mostra-a-mensagem-de-erro')
    } else {
        password.classList.remove('error');
        messagePassword[0].classList.remove('mostra-a-mensagem-de-erro')
    }

    if(confirmPassword.value == '') {
        confirmPassword.classList.add('error');
        messageConfirmPassword[0].classList.add('mostra-a-mensagem-de-erro')
    } else {
        password.classList.remove('error');
        messagePassword[0].classList.remove('mostra-a-mensagem-de-erro')
    }



    if(password.value != confirmPassword.value) {
        messageCheckPassword[0].classList.add('mostra-a-mensagem-de-erro')
    }
}