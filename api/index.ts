import axios from 'axios';
import mongoose from 'mongoose';
import Game from '../mongoose/schemas/Game';

export default async (req: any, res: any) => {
    try {
        res.status(200).json("NFL Spread Showdown API")
    } catch (err) {
        console.error(err);
        res.status(500).send('Error importing games');
    }
};
