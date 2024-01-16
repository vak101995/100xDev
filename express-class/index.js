const express = require("express");

const app = express();
app.use(express.json());

var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

function sum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    var kidneyCount = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    const HealthyKidney = johnKidneys.filter((kidney) => kidney.healthy);
    numberOfHealthyKidneys = HealthyKidney.length;

    // for ( let i =0; i< johnKidneys.length; i++)  {
    //     if(johnKidneys[i].healthy) {
    //         numberOfHealthyKidneys = numberOfHealthyKidneys +1;
    //     }
    // }
    const numberOfunhealthyKidneys = kidneyCount - numberOfHealthyKidneys;
    res.json({
        kidneyCount,
        numberOfHealthyKidneys,
        numberOfunhealthyKidneys
    })
})

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    //const johnKidneys = users[0].kidneys;
    res.json({
        msg: "Done!"
    })
})

app.put("/", function (req, res) {
    if (isUnhealthyKidneyPresent()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    } else {
        res.status(411).json({
            msg: "You have no unhealthy kidneys"
        })
    }

})

function isUnhealthyKidneyPresent() {
    if (users[0].kidneys.filter(kidney => kidney.healthy == false).length > 0) {
        return true;
    }
    else {
        return false;
    }
}


app.delete("/", function (req, res) {

    if (isUnhealthyKidneyPresent()) {
        users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy);
        res.json({
            msg: "unhealthy kidney removed!"
        })
    } else {
        res.status(411).json({
            msg: "You have no unhealthy kidneys"
        })
    }


})

app.listen(3000);