const express = require('express');
const cors = require("cors");
require('./db/config');
const app = express();
const User = require("./db/users");

app.use(express.json());
app.use(cors());
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.post("/api/register", async (req, resp) => {
    let user = new User(req.body);
    console.log(req.body);
    let result = await user.save();
    resp.send(result);
});

app.post("/api/login", async (req, res) => {
    try {
        const user = await User.findOne({ $and: [{ EmailAddress: req.body.EmailAddress }, { password: req.body.password }] })
        res.send(user);
    } catch (error) {
        console.error(error);        
        res.status(401).send("Wrong email or password");
    }

});

app.post("/api/me", async (req, res) => {
    try {
        const user = await User.findOne({ EmailAddress: req.body.EmailAddress })
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(401).send("Wrong email or password");
    }

});

app.patch("/api/user/update", async (req, res) => {
    try {
        await User.updateOne({ EmailAddress: req.body.EmailAddress }, { $set: { ...req.body } })
        res.send("updated");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }

});

app.delete("/api/delete/:email", async (req, res) => {
    try {
        console.log(req.params.email );
        await User.deleteOne({ EmailAddress: req.params.email })
        res.send("deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }

});

app.delete('/api/delete', async (req, resp) => {
    console.log(req.body);
    let data = await User.deleteOne(req.body.EmailAddress);
    resp.send(data);
})

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/registration", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

app.get("/login", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get("/update", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'update.html'));
});

app.get("/display", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'display.html'));
});

app.get("/contact", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(5001);