const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Session Middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET || "supersecret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, httpOnly: true }, // Set `secure: true` in production with HTTPS
    })
);

const dbconnect= async () =>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected!");
    }catch(err){
        console.log("Error connecting Database", err);
    }
}
dbconnect();


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Email validation regex
    },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

// JWT Token Generation
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || "jwtsecret", { expiresIn: "1h" });
};

// Registration Route
app.post("/resister", async (req, res) => {
    const { name, email, password } = req.body;

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,8}$/;
    if (!passwordRegex.test(password)) {
        return res.send("Password must contain uppercase, lowercase, a number, and be 6-8 characters long.");
    }

    try {
        const newUser = new User({ name:req.body.name, email:req.body.username, password:req.body.password });
        await newUser.save();
        res.redirect("/login");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error resistering user.");
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const foundUser = await User.findOne({ email: username });

        if (foundUser && foundUser.password === password) {
            req.session.user = { name: foundUser.name, email: foundUser.email };

            const token = generateToken(foundUser._id);
            res.cookie("session_token", token, { httpOnly: true, secure: true });

            res.redirect("/page");
        } else {
            res.status(401).send("Invalid credentials");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong.");
    }
});

// Protect Routes Using JWT Middleware
const verifyToken = (req, res, next) => {
    const token = req.cookies.session_token;
    if (!token) return res.send("Unauthorized Access!");

    jwt.verify(token, process.env.JWT_SECRET || "jwtsecret", (err, decoded) => {
        if (err || decoded.exp * 1000 < Date.now()) {
            return res.send("Token expired! Please log in again.");
        }
        req.userId = decoded.id;
        next();
    });
};

// Dashboard Route - Display User Info
app.get("/page", verifyToken, (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    res.render("page", { user: req.session.user });
});

// Logout Route
app.get("/logout", (req, res) => {
    res.clearCookie("session_token");
    req.session.destroy(() => {
        res.redirect("/login");
    });
});


// Page Rendering Routes
app.get("/", (req, res) => res.render("home"));
app.get("/resister", (req, res) => res.render("resister"));
app.get("/login", (req, res) => res.render("login"));

app.listen(5000, () => console.log("Server started on port 5000"));