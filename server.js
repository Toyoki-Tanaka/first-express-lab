const express = require("express");

const app = express();

app.get("/greeting/:name", (request, response) => {
    response.send(`Hello ${request.params.name}, it's so nice to see you!`)
})


app.get("/tip/:total/:tipPercentage", (total, tipPercentage) => {
    tipPercentage.send(`${parseInt(total.params.total) * (parseInt(total.params.tipPercentage) / 100)}`)
})


app.listen(3000, () => {

})

