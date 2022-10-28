export type EventsOracle = {
  "version": "0.1.0",
  "name": "events_oracle",
  "instructions": [
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythPriceFeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contestMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "endTimeUnix",
          "type": "i64"
        },
        {
          "name": "wagerAmt",
          "type": "u64"
        }
      ]
    },
    {
      "name": "joinEvent",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contestMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userWagerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prediction",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythPriceFeed",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "submitPrediction",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participant",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewards",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participant",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contestMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWagerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "pythPriceFeed",
            "type": "publicKey"
          },
          {
            "name": "pythExponent",
            "type": "i32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "status",
            "type": {
              "defined": "EventState"
            }
          },
          {
            "name": "registration",
            "type": {
              "defined": "EventState"
            }
          },
          {
            "name": "finalPrice",
            "type": "i64"
          },
          {
            "name": "eventMint",
            "type": "publicKey"
          },
          {
            "name": "mintAuthority",
            "type": "publicKey"
          },
          {
            "name": "mintAuthorityBump",
            "type": "u8"
          },
          {
            "name": "closestPrediction",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "rewardMint",
            "type": "publicKey"
          },
          {
            "name": "rewardVault",
            "type": "publicKey"
          },
          {
            "name": "wagerAmt",
            "type": "u64"
          },
          {
            "name": "potTotal",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventParticipant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "event",
            "type": "publicKey"
          },
          {
            "name": "prediction",
            "type": "u64"
          },
          {
            "name": "entryTime",
            "type": "i64"
          },
          {
            "name": "contestantMint",
            "type": "publicKey"
          },
          {
            "name": "contestantTokenAcct",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EventState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Open"
          },
          {
            "name": "Started"
          },
          {
            "name": "Closed"
          },
          {
            "name": "Finished"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "RegistrationError",
      "msg": "Event no longer accepting new participants"
    },
    {
      "code": 6001,
      "name": "InvalidEventQualifications",
      "msg": "You do not meet the qualifications for this event"
    },
    {
      "code": 6002,
      "name": "InvalidEventAuthority",
      "msg": "Only the even creator/authority can perform this action"
    },
    {
      "code": 6003,
      "name": "InvalidPythAccount",
      "msg": "Pyth account provided does not match Event pyth account"
    },
    {
      "code": 6004,
      "name": "PriceFeedError",
      "msg": "Error loading price feed"
    },
    {
      "code": 6005,
      "name": "InvalidSubmission",
      "msg": "Must wait for the contest to end before submitting prediction"
    },
    {
      "code": 6006,
      "name": "MissingContestToken",
      "msg": "Must have Contest token to submit a prediction"
    },
    {
      "code": 6007,
      "name": "NoRewardsToClaim",
      "msg": "You are not the winner, you have no rewards to claim"
    }
  ]
};

export const IDL: EventsOracle = {
  "version": "0.1.0",
  "name": "events_oracle",
  "instructions": [
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythPriceFeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contestMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "endTimeUnix",
          "type": "i64"
        },
        {
          "name": "wagerAmt",
          "type": "u64"
        }
      ]
    },
    {
      "name": "joinEvent",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "contestMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userWagerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prediction",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythPriceFeed",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "submitPrediction",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participant",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewards",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participant",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "contestMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWagerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programMintAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "pythPriceFeed",
            "type": "publicKey"
          },
          {
            "name": "pythExponent",
            "type": "i32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "status",
            "type": {
              "defined": "EventState"
            }
          },
          {
            "name": "registration",
            "type": {
              "defined": "EventState"
            }
          },
          {
            "name": "finalPrice",
            "type": "i64"
          },
          {
            "name": "eventMint",
            "type": "publicKey"
          },
          {
            "name": "mintAuthority",
            "type": "publicKey"
          },
          {
            "name": "mintAuthorityBump",
            "type": "u8"
          },
          {
            "name": "closestPrediction",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "rewardMint",
            "type": "publicKey"
          },
          {
            "name": "rewardVault",
            "type": "publicKey"
          },
          {
            "name": "wagerAmt",
            "type": "u64"
          },
          {
            "name": "potTotal",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventParticipant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "event",
            "type": "publicKey"
          },
          {
            "name": "prediction",
            "type": "u64"
          },
          {
            "name": "entryTime",
            "type": "i64"
          },
          {
            "name": "contestantMint",
            "type": "publicKey"
          },
          {
            "name": "contestantTokenAcct",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EventState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Open"
          },
          {
            "name": "Started"
          },
          {
            "name": "Closed"
          },
          {
            "name": "Finished"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "RegistrationError",
      "msg": "Event no longer accepting new participants"
    },
    {
      "code": 6001,
      "name": "InvalidEventQualifications",
      "msg": "You do not meet the qualifications for this event"
    },
    {
      "code": 6002,
      "name": "InvalidEventAuthority",
      "msg": "Only the even creator/authority can perform this action"
    },
    {
      "code": 6003,
      "name": "InvalidPythAccount",
      "msg": "Pyth account provided does not match Event pyth account"
    },
    {
      "code": 6004,
      "name": "PriceFeedError",
      "msg": "Error loading price feed"
    },
    {
      "code": 6005,
      "name": "InvalidSubmission",
      "msg": "Must wait for the contest to end before submitting prediction"
    },
    {
      "code": 6006,
      "name": "MissingContestToken",
      "msg": "Must have Contest token to submit a prediction"
    },
    {
      "code": 6007,
      "name": "NoRewardsToClaim",
      "msg": "You are not the winner, you have no rewards to claim"
    }
  ]
};
