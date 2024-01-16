const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const jwtPassword = "123456";

mongoose.connect(
    "mongodb+srv://admin:DVyAwnokv9kOXNNM@cluster0.ywp32xa.mongodb.net/user_app"    
);



const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String
})

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    const user = ALL_USERS.
        find((user) => user.username === username && user.password === password)
    return user ? true : false;
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, "123456");
    return res.json({
        token,
    });
});




app.post("/signup", async function (req, res) {
    


    const username = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    res.json({
        msg: "User created successfully"
    })

})

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter((user) => user.username != username)
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000)