import axios from 'axios';
import mongoose from 'mongoose';
import Game from '../../../../mongoose/schemas/Game';

export default async (req: any, res: any) => {
    try {
        const gameId = req.query.gameId

        // Fetch the data from the ESPN CDN
        const response = await axios.get(process.env.NFL_GAME_ENDPOINT! + `${gameId}/competitions/${gameId}/odds`, { params: { xhr: 1 } });
        const data = response.data; // Adjust this line based on the actual structure of the response

        res.status(200).send(data)
        // res.status(201).send('Games imported successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error importing game');
    }
};
