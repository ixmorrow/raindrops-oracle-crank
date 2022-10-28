import { Contest } from './db/connection'
var cron = require('node-cron')

// exports.initScheduledJobs = () => {
//     const task = cron.schedule('* * * * * *', fetchOpenContests())
//     task.start()
// }

exports.initScheduledJobs = () => {
    const scheduledJobFunction = cron.schedule("* * * * * *", () => {
        fetchOpenContests()
    })

    scheduledJobFunction.start()
}

export async function fetchOpenContests() {
    await Contest.sync()
    const activeContests = await Contest.findAll()
    //console.log(activeContests.every(contest => contest instanceof Contest))
    console.log(activeContests)
    console.log("All contests:", JSON.stringify(activeContests, null, 2))
}