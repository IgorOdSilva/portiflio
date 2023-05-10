const listaSelecaoProjeto = document.querySelectorAll('.projetonav')
const projetoContainer = document.querySelector('.projeto')


listaSelecaoProjeto.forEach(projetonav => {
    console.log(projetonav)

    projetonav.addEventListener('click', () => {
       const cartaoProjetoAberto = document.querySelector('.aberto')
       cartaoProjetoAberto.classList.remove('aberto') 

       const idProjetoSelecionado = projetonav.attributes.id.value

       const idDoCartaoDoProjetoParaAbrir = 'projeto-' + idProjetoSelecionado
       const cartaoProjetoParaAbrir = document.getElementById('projeto-' + idProjetoSelecionado)
       cartaoProjetoParaAbrir.classList.add('aberto')

       const projetoAtivoNaListagem = document.querySelector('.ativo')
       projetoAtivoNaListagem.classList.remove('ativo')

       const projetoSelecionadoNaListagem = document.getElementById(idProjetoSelecionado)
       projetoSelecionadoNaListagem.classList.add('ativo')


    })
})