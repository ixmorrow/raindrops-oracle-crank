import { Contest } from './db/connection'
import { EventsOracle } from "./idl/events_oracle"
import * as anchor from '@project-serum/anchor'
import { PublicKey, Keypair, Connection, clusterApiUrl } from '@solana/web3.js'
import { programAuthority } from './utils/util'
var cron = require('node-cron')

// const programId = new PublicKey("887fNBoewDudLs7GUdEBFfpMZ9EmcFREK9Gmr3KY6pS7")
const cluster = clusterApiUrl("devnet")
const connection = new Connection(cluster)
const wallet = new anchor.Wallet(programAuthority)
const provider = new anchor.AnchorProvider(connection, wallet, {commitment: "confirmed"})
const program = anchor.workspace.EventsOracle as anchor.Program<EventsOracle>

exports.initScheduledJobs = () => {
    const scheduledJobFunction = cron.schedule("* * * * * *", () => {
        fetchOpenContests()
    })

    scheduledJobFunction.start()
}

export async function fetchOpenContests() {
    await Contest.sync()
    const currentUnixTime = Math.round((new Date()).getTime() / 1000)
    let activeContests = await Contest.findAll()
    //console.log(activeContests[0].dataValues.endTime)

    for (let i = 0; i < activeContests.length; i++) {
        if (activeContests[i].dataValues.endTime <= currentUnixTime) {
            let contest = new PublicKey(activeContests[i].dataValues.contestPubkey)
            let priceFeed = new PublicKey(activeContests[i].dataValues.pythPriceFeed)

            // close the contest
            const tx = await program.methods.endEvent()
            .accounts({
                authority: programAuthority.publicKey,
                event: contest,
                pythPriceFeed: priceFeed
            })
            .signers([programAuthority])
            .rpc()

            console.log(tx)
            // remove entry from table
        }
    }
}