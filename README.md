# Projeto Url Shortener 

![Gif funcionando da aplicação](https://ik.imagekit.io/9t3dbkxrtl/url-shortener-melhor_RCuUQsaaQ.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1643578678053)

## 📑 Sobre o projeto

É uma aplicação web(Front-end e Back-end), que funciona basicamente como um encurtador de URLs

## Como Funciona ?

A aplicação consiste em poder criar url personalizadas de links/urls/sites

O usuário poderá criar uma url personalizada colocando o nome que desejar para acessar a URL original

Link do projeto: https://url-shortener-ramon.herokuapp.com

---

## Como Funciona de forma técnica?

Bom, o back-end do site, onde são armazenados as URLs originais, é usado o banco de dados NoSQL MongoDB com Schema.

Quando o usuário cadastra uma URL e seu nome de URL personalizado, na hora de acessar o endpoint do nosso site com o nome personalizado, será pesquisado no banco de dados do MongoDB, 
se o nome existe, e se existe, retornará a url original, que será armazenada em uma váriavel, e o Express irá redirecionar o usuário para a url original.

---

# 🚀 Tecnologias Utilizadas no Front-end
- Bootstrap CSS
- EJS(Engine JavaScript)

# 🚀 Tecnologias Utilizadas no Back-end
- NodeJs
- TypeScript
- Express
- MongoDB
- Eslint

---

# 📁 Como executar o projeto?

## Pré-requesitos: 
- NodeJs 14.17 LTS
- Yarn 1.22

```bash
# clonar repositório
$ git clone https://github.com/ramonpaolo/url-shortner

# entrar na pasta do projeto
$ cd url-shortner/

# instalar as depêndencias:
$ yarn

# iniciar o projeto:
$ yarn dev
```

![GitHub top language](https://img.shields.io/github/languages/top/ramonpaolo/url-shortner)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ramonpaolo/url-shortner)
![GitHub](https://img.shields.io/github/license/ramonpaolo/url-shortner)
