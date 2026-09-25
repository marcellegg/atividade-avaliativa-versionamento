
# Atividade Avaliativa — Versionamento
 
Projeto front-end simples desenvolvido como atividade avaliativa sobre versionamento (Git/GitHub), simulando um pequeno sistema de autenticação com telas de **login**, **cadastro de usuário** e **dashboard**.
 
## 📋 Descrição
 
O sistema simula um fluxo básico de autenticação client-side, sem back-end:
 
- **Login** (`index.html`) — tela inicial onde o usuário informa e-mail/usuário e senha.
- **Cadastro** (`cadastro-usuario.html`) — formulário de criação de conta com validação de campos.
- **Dashboard** (`dashboard.html`) — painel exibido após o login, com menu lateral e cartões de resumo.
Todos os dados de usuário são armazenados localmente no navegador (`localStorage`), pois o projeto tem fins didáticos e não possui back-end/API real.
 
## 🗂️ Estrutura do projeto
 
```
├── index.html               # Tela de login
├── cadastro-usuario.html    # Tela de cadastro de novo usuário
├── dashboard.html           # Painel principal pós-login
├── script.js                # Lógica de autenticação da tela de login
├── style.css                # Estilos da tela de login
└── README.md
```
 
## 🚀 Como executar
 
Não há dependências ou build. Basta abrir o `index.html` em um navegador, ou servir a pasta com qualquer servidor estático:
 
```bash
# Exemplo usando Python
python -m http.server 8000
```
 
