Aqui está o conteúdo completo, incluindo a seção **Instruções de Uso** e as subseções em um único bloco para copiar e colar no seu `README.md`:

```markdown
<h1 align="center">Welcome to PampaBooks 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Disciplina Projeto Web

### 🏠 [Homepage](https://github.com/Gustav-ribeir/PampaBooks)

## Descrição

**PampaBooks** é uma plataforma de livraria online desenvolvida com uma arquitetura de microsserviços. A aplicação oferece funcionalidades de autenticação, catálogo de produtos, sistema de pedidos e gerenciamento de usuários, com cada serviço separado para facilitar a escalabilidade e manutenção.

## Estrutura do Projeto

O projeto está organizado em microsserviços, cada um com uma responsabilidade específica:

- **appPrincipal**: Interface principal com funcionalidades gerais para o usuário.
- **authService**: Gerencia a autenticação de usuários.
- **productService**: Mantém e exibe os produtos disponíveis.
- **orderService**: Processa e gerencia pedidos.
- **userService**: Gerencia informações e permissões de usuários.

## Pré-requisitos

- **Node.js** (versão 20.16.0)
- **Docker** e **Docker Compose**
- **MongoDB** como banco de dados
- **Kubernetes** (para orquestração)

## Configuração do Ambiente

Cada microsserviço possui seu próprio arquivo `.env` para configuração de variáveis de ambiente. Para conectar o projeto ao MongoDB e definir as chaves de autenticação, preencha o `.env` com as variáveis abaixo em cada serviço.

Exemplo de variáveis de ambiente:

```plaintext
PORT=<porta-do-serviço>
MONGO_URI=<url-mongodb>
JWT_SECRET=<chave-secreta>
```

## Instruções de Uso

### Executando com Docker Compose

Para iniciar todos os microsserviços usando Docker Compose:
1. Certifique-se de que o Docker está em execução.
2. No diretório raiz do projeto, execute o comando:
   ```bash
   docker-compose up
   ```

### Executando com Kubernetes

1. O manifesto Kubernetes para implantação está localizado na pasta `/kubernets` como `kubernet.yaml`.
2. Para aplicar o manifesto:
   ```bash
   kubectl apply -f kubernet.yaml
   ```

### Scripts de Inicialização

Se preferir iniciar cada serviço individualmente sem Docker ou Kubernetes, use o script `start_services.sh`:
```bash
./start_services.sh
```

## Endpoints Principais

### Autenticação
- `POST /api/auth/register`: Registro de usuário.
- `POST /api/auth/login`: Login de usuário.

### Produtos
- `GET /api/products`: Lista de produtos.
- `POST /api/products`: Criação de produto (requer autenticação).

### Pedidos
- `POST /api/orders`: Criação de pedido.
- `GET /api/orders/user/:userId`: Lista de pedidos do usuário.

### Usuários
- `GET /api/users`: Lista de usuários (somente administradores).

## Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB
- **Orquestração**: Docker, Kubernetes
- **Autenticação**: JWT
- **Frontend**: EJS para renderização de páginas dinâmicas

## Autor

👤 **Gustavo Ribeiro**

* Github: [@Gustav-ribeir](https://github.com/Gustav-ribeir)

## Mostre seu apoio

Dê uma ⭐️ se você gostou deste projeto!
```

Agora o conteúdo está completo e pronto para ser copiado e colado no seu `README.md`.