# Raindrops Contest Crank
This repo is a service deployed on Heroku to serve as a crank on the (Raindrops Contest program)[https://github.com/ixmorrow/raindrops-contests].

When a new contest is created with the program, a POST request should also be sent to the `/addContest` endpoint of this service's API. This lets the crank know about a new contest it should monitor.

The crank monitors all of the active contests it knows about and calls the `end_event` instruction on the Contests program once the contest has ended.

API URL `https://raindrops-contests-crank.herokuapp.com/`

## API Endpoints

### `/addContest`

Expects a POST request with the following body:

contestPubkey: base58 Publickey

creator: base58 Publickey

pythPriceFeed: base58 Publickey

endTime: unix timestamp



Adds the contest to a database that the crank queries every second.

### `/getContestEndTime`

Expects a GET request with a URL query param:

contest: base58 Publickey

Returns response with the endTime as a unix timestamp for the specified contest.


### `/fetchActiveContests`

Returns response with all of the currently active contests the crank knows about.