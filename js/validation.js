document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('senha');
    const errorMessage = document.querySelector('.error');
    const gmail = '@gmail.com';
    const minimoSenha = 8;

    button.addEventListener('click', function(event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const passValue = passInput.value.trim();

        if (emailValue === '' || passValue === '') {

            errorMessage.textContent = 'Preencha todos os campos!';
            errorMessage.style.display = 'block';
            errorMessage.style.color = 'white';
            errorMessage.style.backgroundColor = 'red';

        } else if (emailValue.endsWith(gmail)) {
            if (minimoSenha == passValue.length || passValue.length >= minimoSenha) {

                errorMessage.style.display = 'none';
                window.location.href = "./html/zenithGlow.html";
       
            }

            else if (minimoSenha != passValue.length) {

                errorMessage.textContent = 'A senha deve ter 8 caracters';
                errorMessage.style.display = 'block';
                errorMessage.style.color = 'white';
                errorMessage.style.backgroundColor = 'red';

            }
             } else {

            errorMessage.textContent = 'Email ou Senha Incorretos!';
            errorMessage.style.display = 'block';
            errorMessage.style.color = 'white';
            errorMessage.style.backgroundColor = 'red';

        }
    });
});
