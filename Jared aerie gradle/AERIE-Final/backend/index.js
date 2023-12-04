const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { urlencoded, json } = require('body-parser');
const http = require('http');
require('dotenv').config({
    path: '.env'
});


const constants = require('./config/constants');
const dbConnection = require('./config/dbConnection');
const userRouter = require('./modules/user/user.routes');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json({ limit: constants.requestBodyLimit }));
app.use(express.static(path.join(__dirname, 'uploads')));

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.setHeader('Access-Control-Expose-Headers', constants.tokenHeaderKey);
    next();
});


// API routes
app.use('/api', userRouter);


const startApiServer = () => {

    const onError = (error) => {
        switch (error.code) {
          case 'EACCES':
            console.error(`Port '${port}' requires elevated privileges`);
            process.exit(1);
          case 'EADDRINUSE':
            console.error(`Port '${port}' is already in use`);
            process.exit(1);
          default:
            throw error;
        }
    };

    const onListening = () => {
        console.log(`Server started on port: ${port}`);
    };

    // Creating server
    let server = http.createServer(app);
    // Wrap the server object with additional functionality.
    // Adding graceful shutdown
    server = require('http-shutdown')(server);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    server.setTimeout(constants.timeouts.serverTimeout);

    app.shutdownServer = () => {
        server.shutdown(() => {
            console.log('Server shutdown successfully');
            process.exit();
        });
    };
}

dbConnection.createDbConnection();
startApiServer();

process.on('SIGINT', () => {
    console.log('Gracefully shutting down from SIGINT (Ctrl-C)');
    app.shutdownServer();
});