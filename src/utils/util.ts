import * as anchor from '@project-serum/anchor'
import { PublicKey, Keypair, Connection, clusterApiUrl } from '@solana/web3.js'


export const programAuthority = Keypair.fromSecretKey(Uint8Array.from([
    192, 158,  33, 154,  60, 128,  90,  55, 227, 174,  93,
    188, 104,  50, 154, 205,  65,  47,  61, 126,  80,   8,
    244,  46, 105, 115, 184, 161,  50, 122, 139, 174,  88,
    113,  10,  37,  88, 158,  69, 139,  68,  25, 140,  85,
    11, 207, 223, 197, 110,  46, 145, 187, 243, 157, 140,
    26,  22,  95, 234,  70,  65,  15, 204, 103
]))