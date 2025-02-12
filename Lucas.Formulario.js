const form = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value; 
    
    if (name === '' || email === '' || mensagem === '') {
        console.log("Por favor, preencha todos os campos.");
        return;
    } else {
        console.log("Mensagem enviada com sucesso!!!");
       
        mensagemSucesso.style.display = 'block';

        
        form.reset();

        
        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 5000);
    }
});
