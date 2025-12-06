
# Calang.io Trainee 2025 - Projeto de Desenvolvimento Web

Repositório dedicado ao desenvolvimento de uma aplicação web completa (frontend + backend) como projeto de trainee da Calang.io.  
O projeto consiste em um sistema de catálogo de filmes com funcionalidades de CRUD e gerenciamento de contatos.

---

## Começando

### **Pré-requisitos**
- Node.js (versão 18 ou superior)
- npm
- Git

---

## Instalação

### **Clone o repositório**
```bash
git clone https://github.com/lfariazzz/Calang.io-Trainee-2025.git
cd Calang.io-Trainee-2025
```

### **Configuração do Backend**
```bash
cd backend
npm install
```

### **Configuração do Frontend**
```bash
cd ../frontend
npm install
```

---

## Estrutura do Projeto
```
Calang.io-Trainee-2025/
├── backend/          # Servidor Node.js com Express
├── frontend/         # Aplicação React com TypeScript
└── README.md         # Documentação do projeto
```

---

## Configuração e Execução

### **Backend**

**Scripts disponíveis:**
```bash
npm run dist        # Compila TypeScript para JavaScript no diretório dist
npm run start:dev   # Inicia servidor em modo desenvolvimento
npm run start:watch # Hot reload automático
npm run start:dist  # Executa versão de produção
```

**Variáveis de ambiente (.env):**
```
PORT=3333
```

---

### **Frontend**

**Scripts disponíveis:**
```bash
npm run dev       # Inicia Vite em modo desenvolvimento
npm run build     # Gera build de produção
npm run lint      # Executa ESLint
npm run preview   # Pré-visualiza build
```

---

## 🌐 API Endpoints

**Base URL:** `http://localhost:3333/api`

### 🎬 **Gerenciamento de Filmes**
| Método | Endpoint        | Descrição                |
|--------|----------------|--------------------------|
| GET    | /movies        | Lista todos os filmes    |
| GET    | /movies/search | Busca filmes filtrados   |
| GET    | /movies/:id    | Obtém filme por ID       |
| POST   | /movies        | Cria novo filme          |
| PATCH  | /movies/:id    | Atualiza filme existente |
| DELETE | /movies/:id    | Remove filme             |

### 📞 **Gerenciamento de Contatos**
| Método | Endpoint   | Descrição               |
|--------|-----------|-------------------------|
| GET    | /contacts | Lista contatos          |
| POST   | /contacts | Cria novo contato       |

---

##  Modelo de Dados (Movie)
```json
export interface movie{
    id: number,
    nome: string,
    categorias: string[],
    ano: number,
    rating: number,
    imagem: string,
    sinopse: string,
    duracao: number
    diretor: string,
    elenco: string,
}
```

---

## Tecnologias Utilizadas

### **Frontend**
- React  
- TypeScript  
- Vite  
- Axios  
- ESLint  

### **Backend**
- Node.js  
- Express  
- TypeScript  
- FlowDB

---

## Estrutura de Diretórios

### Backend
```
backend/
├── src/
│   ├── controllers/  
│   ├── database/       
│   ├── models/  
│   ├── repositories/
│   ├── services/     
│   ├── app.ts      
│   ├── routes.ts      
│   └── server.ts      
├── .env 
├── package-lock.json
├── package.json        
└── tsconfig.json
```

### Frontend
```
frontend/
├── src/
│   ├── assets/
│   ├── Components/   
│   ├── Pages/        
│   ├── Services/     
│   ├── styles/        
│   ├── Types/   
│   ├── App.tsx
│   ├── global.css
│   ├── main.tsx
│   └── Routes.tsx   
├── index.html
├── package.json  
└── arquivos de configuração...
```

---

## Iniciando o Projeto

### **Backend**
```bash
cd backend
npm run start:dev
```

### **Frontend**
```bash
cd frontend
npm run dev
```

### Acesse:
- **Frontend:** http://localhost:5173  
- **Backend API:** http://localhost:3333/api  

---

## Implementações futuras
- Páginas de Admin para criar e editar filmes e visualizar mensagens.
- Sitema de login
- Implementar "Minha Coleção" para o usuário logado salvar filmes em sua coleção.

---

## 📝 Notas de Desenvolvimento
- O backend deve estar rodando para o frontend funcionar corretamente  
- Configure as variáveis de ambiente no `.env`  
- Para desenvolvimento, use `npm run start:watch` no backend  

---

## 🤝 Contribuição
1. Faça um fork  
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)  
3. Commit (`git commit -m "Add AmazingFeature"`)  
4. Push (`git push origin feature/AmazingFeature`)  
5. Abra um Pull Request  

---

## 📄 Licença
Projeto desenvolvido como parte do programa de trainee da Calang.io.

---

## Equipe
### **👨‍💻 Francisco Vitor**  
- GitHub: https://github.com/FranciscoVitorNunes

### **👨‍💻 Levi Farias**   
- GitHub: https://github.com/lfariazzz


