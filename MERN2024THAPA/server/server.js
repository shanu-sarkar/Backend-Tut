const  express = require("express")
const app = express()
const router = require('../router/auth-router');

app.use('/api/auth', router);

const port = 8000;
app.listen(port, () => {
    console.log(`app is runing now port at: ${port}`);
});

