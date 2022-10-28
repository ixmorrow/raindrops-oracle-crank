import express from 'express'
import { Contest } from './db/connection'
import dotenv from 'dotenv'

const bodyParser = require("body-parser")
const app = express()
dotenv.config()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send({
        message: "hello"
    })
})

app.post('/addContest', (req, res) => {
    console.log(req.body)
    const contest = Contest.build({ 
        contestPubkey: req.body.contestPubkey,
        creator: req.body.creator,
        pythPriceFeed: req.body.priceFeed,
        endTime: req.body.endTime
    })
    console.log(contest instanceof Contest)
    console.log(contest.contestPubkey)

    res.send({
        status: "success"
    })
})

app.listen(port, () => console.log(`server listening on port ${port}`))