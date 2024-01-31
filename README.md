# JetLink 🚀

JetLink is a simple and user-friendly URL shortener designed for ease of use. It is built using a modern stack, including Nuxt, Tailwind, Node.js, SQL, JWT, FullStack, and Encryption Authentication. The platform focuses on simplicity, eliminating the need for pricing or registration to create shortened URLs. Additionally, JetLink provides built-in tracking analytics for the links you create.

## Getting Started 🏹

### Prerequisites

- Ensure you have Git and Node.js installed on your machine.

### Installation

## Frontend 🎨

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RicardoCastelloBerenguer/jetLink.git

   ```

2. **Navigate to the project directory:**

   ```bash
   cd jetlink

   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Connect to Backend:**

- Go to /plugins/axios.js

```bash
# make sure that it coincides with your backend url : example -> axios.defaults.baseURL = 'http://localhost:3333/'
axios.defaults.baseURL = 'your-backend-url'

```

## Backend ⚙️

1. **Navigate to the backend project directory:**

   ```bash
   cd /api

   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a .env file with the following content:**
   > 🚧 You have the .env.example with the basic content you need.

```bash
BASE_URL_FRONT=''
BASE_URL_BACK=''

#Example Port

PORT=

# JWT SECRET KEY - You will need this in order to set the Tokens for authentication.
# You can create a JWT_SECRET_KEY online or using an algorithm

JWT_SECRET_KEY =''
CADUCIDAD_TOKEN = '7d'

# DATABASE INFORMATION
DB_HOST=''
DB_NAME=''
DB_USER=''
DB_PASSWORD=''
```

### Usage

1. **Run the development server at / :**

   ```bash
   npm run dev
   ```

2. **Run the api server at /api :**

   ```bash
   npm run dev
   ```

JetLink api is now live at [http://localhost:3000](http://localhost:3333). 🚀

## Features 🌟

- **Simplicity:** Easily create shortened URLs without the need for pricing or registration.
- **Analytics:** Track analytics for the links you create, providing valuable insights.

## Contributing 🤝

We welcome contributions! If you'd like to contribute to JetLink, feel free to open an issue or create a pull request. Your feedback and ideas are highly appreciated. 🌟

## License 📄

This project is licensed under the MIT License.

-

## Happy coding! 🚀✨

-
