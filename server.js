const express = require("express");

const app = express();

app.get("/greeting/:name", (request, response) => {
    response.send(`Hello ${request.params.name}, it's so nice to see you!`)
})


app.get("/tip/:total/:tipPercentage", (total, tipPercentage) => {
    tipPercentage.send(`${parseInt(total.params.total) * (parseInt(total.params.tipPercentage) / 100)}`)
})

const quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
const randomElement = Math.floor(Math.random() * quotes.length)
app.get("/magic/:quote", (request, response) => {
    response.send(`<h1>${quotes[randomElement]}</h1>`)
})


app.listen(3000, () => {

})

