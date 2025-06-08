

class Transacoes{
        
        criarTransacao(descricao,valor){   
        cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-06-07")
        cy.contains("Salvar").click()
    

}

        excluirTransacao(descricao){ 
        cy.contains(".description",descricao) // td -> referencia
            .parent() // tr
            .find('img') // elemento
            .click() // ação de clicar
        //Encontra a descrição "Freela" e sua linha (parent), depois encontra a imagem
        //dentro da linha e da um click.
        //Nesse caso também daria para ter sido utilizado o Siblings e o Children, para encontrar elementos
        //"Irmãos" numa mesma linha, e selecionando o "filho" de um destes irmãos, no caso, a imagem.
}
}
export default new Transacoes()