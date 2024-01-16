// const express = require("express");
// const zod = require("zod");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());
// app.use(express.json());

// //var jsonParser = bodyParser.json();

// const port = 3000;
// const schema = zod.array(zod.number());

// const loginSchema = zod.object(
//     email = zod.string().email(),
//     password = zod.string().min(8)
// )


// app.get('/', function (req, res) {
//     res.send('hello World!')
// })

// app.get('/health-checkup', function (req, res) {
//     // do health checkup here

//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username != "vak" && password != "pass") {
//         res.status(403).json({
//             msg: "User doesn\'t exist",
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({
//             msg: "Something is wrong with your kidney",
//         });
//         return;
//     }

//     res.send({
//         msg: "Your Kidney is fine"
//     })
// });

// app.post('/health-checkup', function (req, res) {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     const kidneyLength = kidneys.length;
//     if (!response.success) {
//         res.status(411).json({
//             msg: "input is invalid",
//         });
//     }
//     res.send(response)
// })

// app.post('/conversation', function (req, res) {
//     console.log(req.body);
//     res.send('baby don\'t hurt me no more')
// })
// app.listen(port)


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

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
    for (i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
            return userExists;
        }
    }

    return false;
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

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter(function (value) {
                if (value.username == username) {
                    return false
                } else {
                    return true;
                }
            })
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);