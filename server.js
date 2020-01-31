import express from 'express';
import dotenv from 'dotenv';

const Server = express();
const PORT = process.env.PORT || 3001;

dotenv.config({ path: './config/conf.env' });

Server.get('/', (req, res) => res.end('Halo programmers!')).listen(PORT, () => console.info(`PORT in ${PORT}`))