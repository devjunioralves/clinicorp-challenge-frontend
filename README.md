# Frontend - ToDo App

## Descrição

Este é o frontend da aplicação ToDo, desenvolvido com React, TypeScript e Vite. A aplicação permite que o usuário visualize e adicione tarefas à lista ToDo.

## Ferramentas Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Vite**: Ferramenta de build rápida e moderna.
- **Axios**: Cliente HTTP para interagir com o backend.
- **ESLint**: Ferramenta de linting para garantir consistência no código.
- **Prettier**: Ferramenta para formatação automática de código.

## Arquitetura

A estrutura do projeto segue uma arquitetura simples e escalável, com as seguintes pastas principais:

- **src**:
  - **components**: Componentes reutilizáveis da interface.
  - **hooks**: Hooks personalizados para a lógica de negócios.
  - **services**: Funções para fazer requisições para o backend.
  - **types**: Tipos e interfaces para garantir a tipagem forte no projeto.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/clinicorp-challenge-frontend.git
   cd clinicorp-challenge-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. A aplicação estará disponível em `http://localhost:5173`.

## Estrutura de Componentes

- **TaskForm**: Formulário para adicionar uma nova tarefa.
- **TaskList**: Exibe a lista de tarefas.
- **Select**: Exibe componente para seleção de status.
- **Loader**: Exibe componente de carregamento.

---

**Autor**: Wanderley Trindade (Junior Trindade)
