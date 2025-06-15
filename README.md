# 🔐 Secure Login System with JWT, Sessions & Cookies
A secure user authentication system built using Node.js, Express, MongoDB, and EJS. This project supports encrypted password storage, JWT-based session management, cookie handling, and user detail rendering post-login.
# 🚀 Live Demo: https://authentication-7b69.onrender.com/

# 📚 Features
- ✅ User Registration with validation
- ✅ Password encryption using mongoose-encryption
- ✅ Login with JWT authentication
- ✅ Secure cookies (HttpOnly)
- ✅ Session-based user tracking
- ✅ Protected dashboard route with user details
- ✅ Clean EJS templating
- ✅ Logout with session and cookie destruction

# 🧰 Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- EJS (Frontend templating)
- express-session & cookie-parser
- JWT (jsonwebtoken)
- dotenv

# 📂 Folder Structure
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
├── public/
│   ├── style.css
│   └── style1.css
├── .env
├── index.js
├── package.json



# ⚙️ Getting Started
- Clone the Repository
git clone https://github.com/ram-bhagat-thakur/Authentication.git
cd authentication-project
- Install Dependencies
npm install
- Create .env File
SESSION_SECRET=yourSecretKey
JWT_SECRET=yourJWTSecret
ENCRYPTION_KEY=yourEncryptionKey
- Start the Server
node index.js
- Open your browser at: http://localhost:5000

# 🔐 Security Notes
- Passwords are encrypted using mongoose-encryption. For production, use bcrypt with hashing.
- Cookies use httpOnly: true to prevent client-side access.
- Set secure: true in cookies when running behind HTTPS in production.

# 📌 TODOs
- [ ] Implement hashed password authentication with bcrypt
- [ ] Add flash messages for feedback
- [ ] Implement refresh tokens
- [ ] Add email verification

# 📄 License
This project is licensed under the MIT License.
