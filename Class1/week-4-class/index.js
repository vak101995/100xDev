const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors({
    origin: "*"
}))

app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());

})

app.get("/interest", function (req, res) {
    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);
    const si = (p*r*t)/100;
    res.send(si.toString());
})


app.listen(3000)