import axios from 'axios';
import mongoose from 'mongoose';
import Game from '../mongoose/schemas/Game';

export default async (req: any, res: any) => {
    try {
        // Fetch the data from the ESPN CDN
        const response = await axios.get(process.env.ESPN_URI!);
        const data = response.data; // Adjust this line based on the actual structure of the response

        res.status(200).send(data.content.sbData)
        // res.status(201).send('Games imported successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error importing games');
    }
};
