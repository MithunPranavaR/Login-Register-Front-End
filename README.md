# Login/Register Frontend

This is a simple React-based frontend for a login and registration system. It allows users to register and log in using their credentials, while handling JWT tokens securely via `localStorage`.

---

## ✨ Features

- 🔐 User registration and login forms
- ✅ Client-side form validations
- 📦 JWT token handling (save, retrieve, and attach to requests)
- 🌐 CORS-enabled API requests to Django backend
- 🧼 Clean and minimal UI with responsive layout
---
## ⚙️ Setup Instructions

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/login-register-frontend.git
cd login-register-frontend
### 2️⃣ Install Dependencies
npm install

### 3️⃣ Start the Dev Server
npm start

The app will be available at: http://localhost:3000

⚠️ Make sure your Django backend is running on http://localhost:8000 or update the base URL accordingly in your API service file.

🔐 Auth Flow
Upon successful login:

JWT tokens (access, refresh) are saved to localStorage

User is redirected to a protected dashboard or homepage

Logout clears localStorage and redirects to login
