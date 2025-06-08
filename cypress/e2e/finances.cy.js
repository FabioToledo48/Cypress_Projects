import Transacoes from '../pages/index.js'

 
 describe('Transações', () => {

    //Executa antes de qualquer coisa dentro do IT
    beforeEach(() =>{
    cy.visit("https://my-devfinances.netlify.app/")



    })

    //Inicia uma série de ações 
    it('Cadastrar uma Entrada', () => {
        Transacoes.criarTransacao("Testeee", 5)
        //Cria uma transação com a descrição "Testeee" e o valor 5.

        cy.get("tbody tr td.description").should("have.text","Testeee")
        //Confirma se a descrição é "Testeee"
    });


    it('Cadastrar uma saída', () => {
        Transacoes.criarTransacao("Cinema", -46)

        cy.get("tbody tr td.description").should("have.text","Cinema")

    }); 

    it('Excluir transação',() =>{
        Transacoes.criarTransacao("Freela", 100)
        Transacoes.criarTransacao("Mesada", 10)

        Transacoes.excluirTransacao("Freela")
        
        cy.get('tbody tr').should("have.length",1)
        //Confirma que o tbody tr possui o tamanho 1, ou seja, apenas 1 transação.

    }); 




});

