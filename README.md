<div style="text-align: center;"><h1>Soft Clinic</h1></div>

> Status do Trabalho: Desenvolvimento ⚠️

<p style="color: blue;">SISTEMA DE GESTAO DE CLINICA</p>

Sistema de Gestão de Clinicas - API REST 
para gerenciar uma clinica local

<h2>Tecnologias Utilizadas no Beck-end</h2>
<h4>Neste projeto foram utilizadas as seguintes tecnologias e bibliotecas:</h4>
<ul>
 <li><b>Node.js:</b> Ambiente de execução JavaScript no servidor.</li>
 <li><b>Express:</b> Framework para criação de servidores web e APIs.</li>
 <li><b>CORS:</b> Middleware para habilitar o compartilhamento de recursos entre diferentes origens.</li>
 <li><b>Prisma:</b> ORM para acesso e manipulação de banco de dados com TypeScript/JavaScript.</li>
 <li><b>Bcrypy:</b> Utilizada para criptografia de senhas e sigurança de sistemas</li>
 <li><b>Insomnia:</b> Para testes</li>
</ul>
      
<h2>Tecnologias Utilizadas no Front-end</h2>

<h3>Neste projeto foram utilizadas as seguintes tecnologias e bibliotecas:</h3>

<ul>
 <li><b>React:</b> Biblioteca para construção de interfaces de usuário</li>
 <li><b>React Hooks (useState, useEffect, useRef):</b> Para gerenciamento de estado, efeitos colaterais e referências.</li>
 <li><b>CSS:</b> Para estilização dos componentes (importado via ./style.css)</li>
 <li><b>Axios:</b> Biblioteca para requisições HTTP (no código importada como api).</li>
 <li><b>Importação de imagens:</b> Gerenciamento de assets estáticos, como ícones (Trash.png).</li>
</ul>

<h2>Arquitetura do Projeto</h2>

<h3>Backend</h3>
O backend foi desenvolvido utilizando uma arquitetura monolítica simples baseada em API REST. 

<h3>As principais características são:</h3>

<ul>
 <li><b>Monolítica:</b> O servidor Express gerencia todas as rotas, lógica de negócio e acesso ao banco de dados em uma única camada.</li>
 <li><b>API REST:</b> Implementação de rotas para operações CRUD (POST, GET, PUT, DELETE) sobre a entidade usuarios.</li>
 <li><b>ORM Prisma:</b> Utilização do Prisma Client para interação direta com o banco de dados, facilitando consultas e manipulações.</li>
 <li><b>Middleware básico:</b> Uso de express.json() para parsing de JSON e cors() para habilitar requisições cross-origin.</li>
 <li><b>Sem separação explícita de camadas:</b> Toda a lógica está centralizada, sem divisão formal em controllers, services ou repositories.</li>
 Essa arquitetura é simples, fácil de entender e ideal para aplicações pequenas ou protótipos rápidos.
</ul>

<h2>Frontend</h2>
<h3>O frontend foi desenvolvido com React utilizando uma arquitetura funcional simples. As principais características são:</h3>
<ul>
 <li><b>Componente único:</b> Toda a aplicação está dentro de um único componente funcional (Home), que gerencia estado, efeitos e renderização.</li>
 <li><b>React Hooks:</b> Uso de useState, useEffect e useRef para controle de estado local, efeitos colaterais e referências a elementos do DOM.</li>
 <li><b>Gerenciamento local de estado:</b> O estado da aplicação (lista de usuários, edição, visibilidade) é mantido dentro do componente.</li>
 <li><b>Chamada direta à API:</b> Funções para criação, leitura, atualização e exclusão de dados são feitas diretamente no componente.</li>
 <li><b>Estilização externa:</b> Arquivo CSS separado para estilos visuais.</li>
 <li><b>Importação de assets:</b> Uso de imagens estáticas para botões e ícones.</li>
 Essa abordagem é adequada para projetos pequenos ou MVPs, mas pode demandar refatoração para escalabilidade em aplicações maiores.
</ul>

<h2>Recursos</h2>

<ul>
 <li>Express</li>
 <li>MongoDB</li>
</ul>

<h2>Requisitos</h2>
<ul>
 <li>Node.js</li>
 <li>npm</li>
 <li>MongoDB</li>
</ul>
<h2>Ferramentas</h2>
 <ul>
 <li>Visual Studio Code</li>
 <li>MongoDB Compass</li>
 <li>[insomnia]</li>
</ul>  
<h2>Configuração</h2>

<h3>A API usa as seguintes variáveis de ambiente:</h3>
<ul>
 <li><b>PORT -</b> a porta na qual a API vai escutar por requisições.</li>
 <li><b>MONGODB_URI -</b> a URL do banco de dados MongoDB para conectar.</li>
 <li><b>MONGODB_LOCAL -</b> a URL do banco de dados MongoDB local para conectar.</li>
</ul>  



Instalação
Para instalar a plataforma e suas dependências, siga os seguintes passos:

<h2>Funcionalidades</h2>
O projeto possui diversas funcionalidades, incluindo:

Cadastrar pacientes: Permite que pacientes se cadastrem no centro médico.
Autenticar usuários: Permite que usuários se autentiquem no centro médico.
Gerenciar consultas: Permite que usuários gerenciem consultas, incluindo adicionar consultas, obter todas as consultas e mais.

<h2>Contribuidores</h2>
@Mateus Rayrisson
[@Arthur Oliveira]

<h2>Conclusão</h2>
Esta API fornece uma solução completa para gerenciar uma clínica médica e pode ser usada como ponto de partida para futuras personalizações e expansões.
 
