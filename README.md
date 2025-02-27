# Password Manager

A secure password manager built with **Next.js**, **MongoDB**, **ShadCN**, and **TailwindCSS**. This project provides secure storage and encryption for user passwords, utilizing Firebase authentication and strong cryptographic hashing.

## Features
- 🔐 **Secure Password Storage** (AES Encryption)
- 🔑 **User Authentication with Firebase**
- 📄 **CRUD Operations** for managing passwords
- 🖌 **Modern UI** with ShadCN and TailwindCSS
- 🚀 **API Routes** for backend logic

---

## 🛠 Tech Stack
- **Frontend:** Next.js, TailwindCSS, ShadCN
- **Backend:** Next.js API Routes, MongoDB (Mongoose ORM)
- **Authentication:** Firebase
- **Security:** AES Encryption (CryptoJS), Bcrypt.js

---

## 🚀 Getting Started
### 1️⃣ Clone the repository
```sh
 git clone [https://github.com/yourusername/password-manager.git](https://github.com/rajtilak01/PasswordManager.git)
 cd password-manager
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory and add:
```env
MONGODB_URI="your_mongodb_connection_string"
NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_firebase_project_id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_sender_id"
NEXT_PUBLIC_FIREBASE_APP_ID="your_firebase_app_id"
ENCRYPTION_SECRET="your_strong_secret_key"
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```
> Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Project Structure
```
password-manager/
│-- components/        # Reusable UI components
│-- models/            # Mongoose models
│-- pages/             # Next.js pages
│   ├── api/           # API routes (backend logic)
│-- lib/               # Firebase and database configurations
│-- public/            # Static assets
│-- styles/            # TailwindCSS styles
│-- .env.local         # Environment variables
│-- next.config.js     # Next.js configuration
│-- tailwind.config.js # TailwindCSS configuration
│-- README.md          # Project documentation
```

---

## 📌 Features Breakdown
### 🔑 User Authentication
- Firebase authentication for login/logout
- Secure user session management

### 🔐 Password Management
- Store passwords with AES encryption
- Secure API endpoints for CRUD operations
- Auto-hashing before saving passwords

### 🎨 Modern UI
- Responsive and clean UI with TailwindCSS
- Beautiful components with ShadCN

---

## 📜 API Endpoints
### `POST /api/passwords`
**Description:** Saves a new password
#### **Request Body:**
```json
{
  "site": "example.com",
  "username": "user@example.com",
  "password": "mypassword",
  "userId": "user_firebase_id"
}
```

### `GET /api/passwords`
**Description:** Fetches all saved passwords for a user

### `DELETE /api/passwords/:id`
**Description:** Deletes a stored password

---

## 🛡 Security Measures
- **Passwords are never stored in plaintext** (AES Encryption)
- **Authentication handled securely** with Firebase
- **API endpoints are protected** using authentication middleware
- **Environment variables** used for sensitive data

---

## 🚀 Deployment
### 🌍 Deploy on Vercel
1. Create a new Vercel project
2. Add `.env.local` variables in Vercel settings
3. Deploy with:
   ```sh
   vercel
   ```

---

## 🎯 Future Enhancements
- ✅ **Two-Factor Authentication (2FA)**
- ✅ **Clipboard Copy Functionality**
- ✅ **Password Strength Indicator**

---

## 🛠 Contributing
Contributions are welcome! Please fork the repo and submit a PR.

---

## 📄 License
MIT License © 2025 Rajtilak Pandey

