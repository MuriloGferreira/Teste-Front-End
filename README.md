# Teste Front-end Corebiz

## Requisitos para rodar o projeto

### Configuração do ambiente

Certifique-se de ter os seguintes requisitos instalados:

- **[Node.js LTS](https://nodejs.org/en)**  
  Recomenda-se o uso do [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node.js:
  ```bash
  nvm install
  nvm use
  ```

### Como rodar o projeto na sua máquina?

1. Clone o repositório:
   ```bash
   git clone https://github.com/MuriloGferreira/Teste-Front-End.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. O projeto estará disponível! 🎉

---

## Página Inicial (Home Site)

O projeto representa uma página inicial com diferentes seções, organizadas em componentes modulares.  

### Estrutura do projeto

A organização do código segue uma estrutura lógica e modular:

- **`App.jsx`**: Arquivo principal responsável por montar a página inicial.  
- **`/src/components`**: Pasta contendo os componentes criados, organizados por funcionalidade.

### Organização por seções

Cada seção da página inicial está separada em subpastas específicas para facilitar a navegação e manutenção.  

Principais componentes:
- **`Header`**: Cabeçalho do site.  
- **`Minicart`**: Componente que usa localstorage para adição, remoção, vizualição dos produtos.
- **`BannerCarousel`**: Componente para exibição de banners em carrossel.
- **`ProductCarousel`**: Componente de carrossel de produtos.  
- **`Newsletter`**: Formulário de inscrição na newsletter.  
- **`Footer`**: Rodapé do site.  

Para realizar alterações, basta acessar a pasta correspondente ao componente desejado.

---

## Tecnologias e bibliotecas utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React**: Framework principal para criação da interface.  
- **Sass**: Pré-processador CSS para estilização.  
- **Axios**: Para consumo de APIs.  
- **React-Slick**: Biblioteca usada nos componentes de carrossel (banners e prateleira) para otimizar o desenvolvimento.  
- **useContext + useLocalStorage**: Utilizados para implementar o minicart de forma eficiente e persistente.  
- **gh-pages**: Ferramenta utilizada para realizar o deploy do projeto.  
  Mais informações: [gh-pages](https://www.npmjs.com/package/gh-pages).  

---