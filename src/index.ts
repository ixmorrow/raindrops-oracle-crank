import express from 'express'
import { Contest } from './db/connection'
import dotenv from 'dotenv'
import { fetchOpenContests } from './cron'

const scheduledFunctions = require('./cron')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()
const port = process.env.PORT || 3000

scheduledFunctions.initScheduledJobs()

app.get('/', (req, res) => {
    res.send({
        message: "hello"
    })
})

app.post('/addContest', (req, res) => {
    console.log(req.body)
    const contest = Contest.create({ 
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

app.get('/purgeTable', async (req, res) => {
    await Contest.destroy({
        truncate: true
    })
    res.send({
        message: "contests fetched"
    })
})

app.get('/fetchActiveContests', async (req, res) => {
    const ActiveContests = await Contest.findAll()
    console.log("All users:", JSON.stringify(ActiveContests, null, 2))
    res.send({
        contests: JSON.stringify(ActiveContests, null, 2)
    })
})

app.listen(port, () => console.log(`server listening on port ${port}`))