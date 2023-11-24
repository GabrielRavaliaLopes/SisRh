const usuarios = [
    {
        login: 'Victor',
        pass: 'Victor'
    },
    {
        login: 'Julio',
        pass: 'Julio'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]

let botao = document.getElementById('buttonlogin')

botao.addEventListener('click', function logar(){

    let pegausuario = document.getElementById('usuario').value
    let pegasenha = document.getElementById('senha').value

    for (let i in usuarios){
        if(pegausuario == usuarios[i].login && pegasenha[i].pass){
            alert('Ok')
            location.href="/asp/acesses/telaPagamentoMensal.html"
        }
    }
    
    })