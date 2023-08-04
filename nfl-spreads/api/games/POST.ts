// api/games/POST.js
import axios from 'axios';
import mongoose from 'mongoose';
import Game from '../../mongoose/schemas/Game';

module.exports = async (req, res) => {
    try {
        // Fetch the data from the ESPN CDN
        const response = await axios.get(process.env.ESPN_URI!);
        const data = response.data; // Adjust this line based on the actual structure of the response

        // Transform and save the data to your MongoDB database
        const games = data.games.map(game => ({
            // Transform the data into your Game schema here
        }));
        await Game.insertMany(games);

        res.status(201).send('Games imported successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error importing games');
    }
};
