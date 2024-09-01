# Simple HTTP server used to interact with TTS

## How To Run

Setup and run a mongodb server, if needed [follow this guide.](https://www.mongodb.com/docs/manual/installation/) Then add a .env file with the endpoint declared like below:
```
MONGO_ENDPOINT=mongodb://0.0.0.0:27017
```

Start the Express server:
```
cd server
npm install
npm run dev
```

View the tts-webrequest repository or workshop item to see how to connect via the Tabletop Simulator Api.
