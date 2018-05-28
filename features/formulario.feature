#language: pt
Funcionalidade: Cadastro de Pessoas

Contexto:
    Dado que eu tenha iniciado o formulário

@Fluxo @Mobile
Cenário: Iniciando formulário
    Então devo ver a opção de informar meu nome

@Fluxo
Cenário: Informando dados inciais no formulário
    Quando confirmo após preencher o nome
    Então devo ver a opção de informar meu sobrenome

@Fluxo
Cenário: Concluindo formulário
    Dado que eu tenha preenchido meu nome e avançado
    Quando eu preencho os demais dados
    E finalizo o registro
    Então devo ver uma mensagem de que o registo foi concluido com sucesso

@Exceção
Cenário: Confirmar sem informar um dado
    Quando eu confirmo sem informar um campo obrigatório
    Então devo ver uma mensagem de aviso no campo obrigatório de que devo preenche-lo 
