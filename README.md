# Teste do Formulário

Para configurar e rodar os testes no seu browser e o browser mobile, siga as instruções a seguir

## Clonando e abrindo repositório localmente

Para visualizar este código localmente, clone o repositório utilizando o comando
```
git clone <url_repositorio>
```

Abra a pasta onde o projeto foi clonado utilizando o editor de código de sua preferência (ex.: Atom, VS Code, Sublime)

## Baixando as dependências
No console, use
```
npm install
```

## Ambiente WEB

### Iniciando o WebDriver
```
npm run webdriver
```

### Rodando os testes
```
npm test
```

## Ambiente Mobilie

Passos para rodar os testes no chrome versão android

### Iniciando o WebDriver
```
npm run webdriver_android
```
Isso pode demorar um tempo considerável. Uma boa hora para um café :)

## Rodando os testes
```
npm test_android
```

# Visualizando cenários de forma mais amigável

Cenários dentro do repositório não são o ideal para compartilharmos com o stakeholder ou pessoas leigas em programação. Por isso, usamos o feature-express para trazer esses cenários de uma forma mais visual e legivel para compartilhar com todos do time e o cliente.

O feature-express já está incluindo nas dependencias desse projeto. Caso queira saber mais sobre ele, clique [aqui](http://agiletesters.com.br/topic/1731/feature-express-uma-forma-elegante-de-expor-suas-features/2)

Iniciando o feature-express local
```
npm run feature-express
```

Acesse a URL indicada no console para ver os cenários.

