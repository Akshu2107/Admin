const express = require('express');
const { connectToMongoDB } = require('./connection');
const app = express();
const port = 8000;
const Router = require('./router/user');
const bodyparser = require("body-parser");
var cors = require("cors");
const orderRouter = require('./router/orders');

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());




//conection
connectToMongoDB();



//route
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/user", Router);

app.use("/order", orderRouter)



app.listen(port, () => console.log(`Dashboard app server listening on port ${port}!`))