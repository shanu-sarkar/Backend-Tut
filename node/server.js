import express from "express"

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Jai shree ram")
})

app.listen(PORT, () => {
    console.log(PORT);
});