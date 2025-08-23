### 🔐 Authentication System

A secure user authentication system built using **Node.js**, **Express**, **MongoDB**, and **EJS**.  
This project was created as part of my self-guided learning to understand how login, signup, sessions, and cookies work in a full-stack environment.

🔗 **Live Demo:** [authentication-7b69.onrender.com](https://authentication-7b69.onrender.com)

---

### 🚀 Features

- ✅ User Registration with validation
- 🔐 Password encryption using `mongoose-encryption`
- 🔑 Login with JWT authentication
- 🍪 Secure cookies (`httpOnly`)
- 🧠 Session-based user tracking
- 🔒 Protected dashboard route with user details
- 🎨 Clean EJS templating
- 🔓 Logout with session and cookie destruction

---

### 🛠️ Tech Stack

| Layer        | Technology             |
|--------------|-------------------------|
| Backend      | Node.js, Express        |
| Database     | MongoDB + Mongoose      |
| Frontend     | EJS (templating)        |
| Auth & State | JWT, express-session, cookie-parser |
| Config       | dotenv                  |

---

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ram-bhagat-thakur/Authentication.git
cd Authentication

# Install dependencies
npm install

# Create .env file and add secrets
touch .env
# Add the following keys:
# SESSION_SECRET=yourSecretKey
# JWT_SECRET=yourJWTSecret
# ENCRYPTION_KEY=yourEncryptionKey

# Start the server
node index.js

# Open in browser
http://localhost:5000
```

### 📁 Project Structure

```text
Authentication/
├── views/              # EJS templates
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
├── public/             # Static CSS files
│   ├── style.css
│   └── style1.css
├── .env                # Environment variables
├── index.js            # Server entry point
├── package.json        # Project metadata
├── package-lock.json   # Dependency lock file
└── README.md           # Project documentation
```
---

### 🧠 Learning Outcomes

- 🧩 Learned how to implement user authentication using sessions and JWT
- 🔐 Practiced password encryption and secure cookie handling
- 🧠 Understood middleware flow and route protection
- 🎨 Improved frontend templating with EJS
- 🚀 Deployed a secure full-stack app using Render

---

### 📌 TODOs

- 🔄 Replace encryption with hashed password authentication using bcrypt
- 💬 Add flash messages for user feedback
- 🔁 Implement refresh tokens for session renewal
- 📧 Add email verification for new users

---

### 🙌 Acknowledgements

This project was created as part of my self-guided learning in full-stack authentication.  
Thanks to the open-source community and documentation that helped me understand secure login systems.

---

### 📜 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
