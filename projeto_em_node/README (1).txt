DISCOVER BOOK


Descrição do Projeto
O Discover Book é uma plataforma interativa voltada para o incentivo à leitura infantil e a gestão de campanhas de arrecadação. O objetivo principal é levantar doações de livros físicos e digitais, cultivando o amor pela leitura por meio de um ambiente exclusivo para crianças e um sistema de engajamento social.


Funcionalidades de Arrecadacao e Voluntariado
Inscrição de Voluntários: Área dedicada para pessoas dispostas a ajudar na organização e logística das campanhas de arrecadação.


Portal de Doadores: Espaço para doadores especificarem o tipo de livro (físico ou digital) que desejam desapegar.


Campanhas Ativas:Divulgação de campanhas vigentes para incentivar a participação da comunidade.


FUNCIONALIDADES DO SISTEMA 
Catálogo Interativo: Exibição de livros com foco no público infantil, incluindo imagem, título, origem e categoria.


Página de Detalhes:Apresentação completa da obra, incluindo resumo e história.






TECNOLOGIAS UTILIZADAS 


Node.js e Express: Infraestrutura de backend e gerenciamento de rotas.


EJS: Renderização dinâmica das páginas de doação e catálogo.


SQLite3:Armazenamento persistente de dados de livros, voluntários e doadores.


HTML5, CSS3 e JavaScript:Interface focada na interatividade e acessibilidade infantil.


ESTRUTURA DO PROJETO 
public/: Arquivos estáticos como CSS, scripts e imagens das campanhas.


views/:Templates para o catálogo, área de doação e detalhes dos livros.
routes/:Lógica de autenticação e processamento de formulários de voluntários.
app.js: Servidor principal da aplicação.
db.js: Configuração do banco de dados e criação automática de tabelas.


COMO EXECUTAR A APLICAÇÃO 


1. Clonar o repositório:
Execute: git clone https://github.com/kerlyaneM/discover-book.git


2. Instalar dependências:
Dentro da pasta do projeto, execute: npm install.


3. Iniciar o servidor:
Execute o comando: node app.js 


4. Acessar no navegador:
Abra o endereço: http://localhost:3000