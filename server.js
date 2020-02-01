import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import tech from './routes/tech';
import users from './routes/users';
import bodyParser from 'body-parser';
import mongoose from './database/mongo';

const Server = express();
const PORT = process.env.PORT || 3001;

dotenv.config({ path: './config/conf.env' });
mongoose.connection.on('err', console.error.bind(console, 'Database error.'));

Server.set('SecretKey', 'NodeRESTAPI');
Server.use(bodyParser.urlencoded({ extended: false }));


Server.get('/', (req, res) => res.json({ "tutorial": "Build REST API with node.js" }));

Server.use('/users', users);
Server.use('/tech', validateUser, tech);
Server.get('/favicon.ico', (req, res) => res.sendStatus(204));

const validateUser = (req, res, next) => {
    jwt.verify(req.headers['x-access-token'], req.Server.get('SecretKey'), function (err, decoded) {
        if (err) {
            res.json({ status: "error", message: err.message, data: null });
        } else {
            req.body.userId = decoded.id;
            next();
        }
    });

}
Server.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

Server.use((err, req, res, next) => {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "404 Not Found" });
    else
        res.status(500).json({ message: "Something wrong :')" });
});

Server.listen(PORT, () => console.log(`Node server listening on port ${PORT}`));