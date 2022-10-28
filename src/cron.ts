import { Contest } from './db/connection'
import { EventsOracle } from "./idl/events_oracle"
import ContestsIdl from './idl/events_oracle.json'
import * as anchor from '@project-serum/anchor'
import { PublicKey, Keypair, Connection, clusterApiUrl } from '@solana/web3.js'
import { programAuthority, safeAirdrop } from './utils/util'
var cron = require('node-cron')

const programId = new PublicKey("HbR4nXvUASns7kybpVN8CNggykFhgtHQThvMZv3AihBw")
const cluster = clusterApiUrl("devnet")
const connection = new Connection(cluster)
const wallet = new anchor.Wallet(programAuthority)
const provider = new anchor.AnchorProvider(connection, wallet, {commitment: "confirmed"})
const program = new anchor.Program(
    ContestsIdl as anchor.Idl,
    programId,
    provider
);

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
    await safeAirdrop(programAuthority.publicKey, connection)

    for (let i = 0; i < activeContests.length; i++) {
        if (activeContests[i].dataValues.endTime <= currentUnixTime) {
            let contest = new PublicKey(activeContests[i].dataValues.contestPubkey)
            let priceFeed = new PublicKey(activeContests[i].dataValues.pythPriceFeed)
            let creator = new PublicKey(activeContests[i].dataValues.creator)

            // close the contest
            const tx = await program.methods.endEvent()
            .accounts({
                authority: programAuthority.publicKey,
                creator: creator,
                event: contest,
                pythPriceFeed: priceFeed
            })
            .signers([programAuthority])
            .rpc()

            console.log("Event Ended:")
            console.log(tx)

            // remove entry from table
            await Contest.destroy({
                where: {
                    contestPubkey: contest.toBase58()
                }
            })
        }
    }
}