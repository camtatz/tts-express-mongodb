# Simple CRUD server used to interact with TTS

## How To Run

1. You can follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide, to learn how to create a free Atlas account, create your first cluster and get your Connection String to the database.
Then, set the Atlas URI connection parameter in `server/.env` to your Connection String:

Setup and run a mongodb server, if needed [follow this guide.](https://www.mongodb.com/docs/manual/installation/) Then add a .env file with the endpoint declared like below:
```
MONGO_ENDPOINT=mongodb://0.0.0.0:27017
```

2. Start the Express server:
```
cd server
npm install
npm run dev
```

3. View the tts-webrequest repository or workshop item to see how to connect via the Tabletop Simulator Api.
