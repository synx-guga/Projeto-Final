// Aguarda o HTML ser completamente carregado

document.addEventListener('DOMContentLoaded', () => {
    //Selecionar elementos do DOM
    const inputSenha = document.getElementById('senha');
    const btnSubmit = document.getElementById('btnSubmit');
    const form = document.getElementById('formCadastro');

    //Selecionar os itens da lsita de requisitos de senha
    const reqLength = document.getElementById('req-length'); // Tamanho mínimo
    const reqUpperc = document.getElementById('req-upper'); // Letra maiúscula
    const reqNumber = document.getElementById('req-number'); // Número
    const reqSpecial = document.getElementById('req-special'); // Caractere especial

//Função para verificar a senha a cada tecla digitada
inputSenha.addEventListener('input', () => {
    const valor = inputSenha.value;
    
    //validar tamanho
    const hasLength = valor.length >= 8;
    alternarClasse(reqLength, hasLength);

    //validar letra maiúscula (Regex)
    const hasUpperc = /[A-Z]/.test(valor);
    alternarClasse(reqUpperc, hasUpperc);

    //validar número (Regex)
    const hasNumber = /[0-9]/.test(valor);
    alternarClasse(reqNumber, hasNumber);

    //validar caractere especial (Regex)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(valor);
    alternarClasse(reqSpecial, hasSpecial);

    if (hasLength && hasUpperc && hasNumber && hasSpecial) {
        //botão fica habilitado
        btnSubmit.disabled = false;
        //cursor do botão muda para pointer
        btnSubmit.style.cursor = 'pointer';
    } else {
        //botão fica desabilitado
        btnSubmit.disabled = true;
        //cursor do botão muda para not-allowed
        btnSubmit.style.cursor = 'not-allowed';
    }

})

// Função para tracar a cor do texto
function alternarClasse (elementos, estaValid) {
    const icone = elementos.querySelector('i');

    if (estaValid) {
        elementos.classList.add('valid');
        elementos.classList.remove('invalid');
        icone.classList.remove('ph-circle');
        icone.classList.add('ph-check-circle');
    } else {
        elementos.classList.remove('valid');
        elementos.classList.add('invalid');
        icone.classList.add('ph-circle');
        icone.classList.remove('ph-check-circle');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alternarClasse('Formulário enviado com sucesso!',);
});


});