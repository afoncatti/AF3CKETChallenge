# Challenge Frontend - NuxtJS

## Build  e Deploy

```bash
# 1 - instalar dependencias
$ yarn install

# 2 - Realize o build para ambiente de produção
$ yarn build

# 3 - Sirva o projeto
$ yarn start

# O projeto estará acessível em:
http://localhost:3000

# O projeto necessita que a API fornecida esteja rodando em:
http://localhost:3001
```


## Módulos utilizados

### @nuxt/typescript-build

Utilizado para habilitar o typescript no projeto, inserindo configurações que forçam a utilização de tipagem no projeto.
Isso traz mais segurança e facilidade para o desenvolvimento. Desde que o desenvolvedor conheça Typescript e ativamente implemente e reforce a utilização de tipagem.

### @nuxtjs/stylelint-module'

Foi adicionada uma biblioteca de linting de scss para melhor manter e ordenar a formatação dos estilos. O que ajuda a manter uma forma mais concisa de escrita e padronização.

### @nuxtjs/tailwindcss'

Implementação do tailwind para uso de classes utilitárias e padronização de estilos. Com o devido conhecimento da biblioteca, é possível criar estilos de forma mais rápida e assertiva.

### nuxt-typed-vuex'

Módulo adicionado para facilitar a utilização do vuex com typescript.

### @nuxtjs/google-fonts'

Módulo padrão utilizado para adicionar fontes do google fonts ao projeto.

### @nuxtjs/axios'

Biblioteca de requisições http utilizada para realizar as consultas na API fornecida.

## Estrutura do projeto

O projeto foi desenvolvido utilizando o framework NuxtJS, que tem como base o VueJS. O NuxtJS facilita a criação de projetos SSR (Server Side Rendering) e SPA (Single Page Application).

Nesse caso foi optado pelo modo SPA para facilitar o desenvolvimento simulando o comportamento de uma aplicação real.

O projeto é constituído basicamente por duas páginas:

### Home

Acessada no caminho raiz do projeto, a página home é a página principal do projeto. Nela é possível visualizar os eventos recuperados da rota `/events` da API fornecida, com a possibilidade de filtrar por substring do nome e ordenar por nome, preço mínimo ou data.

Cada componente genérico de evento contem um `nuxt-link` que redireciona para a página de detalhes do evento, sem efetuar um recarregamento da página, simulando o comportamento de uma aplicação nativa.

### Detalhes do evento

A página de detalhes de evento é dinâmica e deve receber o `slug` obtido nas informações do evento.

A partir do `slug` é feita uma requisição a API fornecida para obter as informações do como imagem, título, data e localização do evento e exibi-las na tela.

## Considerações finais

O projeto foi criado com o intuito de demonstrar o conhecimento do desenvolvedor em relação ao framework NuxtJS e suas funcionalidades, bem como a utilização de typescript e boas práticas de programação.

Animações e transições foram adicionadas para melhorar a experiência do usuário, bem como a utilização de um layout responsivo para uma navegação intuitiva em dispositivos móveis.
