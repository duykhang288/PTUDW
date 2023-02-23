const expess = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = expess();

app.use(cors());
app.use(expess.json());
app.use("/api/contacts", contactsRouter);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

module.exports = app;