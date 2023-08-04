import axios from 'axios';
import mongoose from 'mongoose';
import Game from '../../../../../mongoose/schemas/Game';

export default async (req: any, res: any) => {
    try {
        const week = req.query.week

        if (isNaN(week) || week < 1 || week > 17) {
            res.status(400).send('Week must be between 1 and 17');
            return;
        }

        const params = {
            xhr: 1,
            week,
            seasontype: 2,
            year: 2023
        }

        // Fetch the data from the ESPN CDN
        const response = await axios.get(process.env.NFL_SCHEDULE_ENDPOINT!, { params });
        const data = response.data.content; // Adjust this line based on the actual structure of the response

        res.status(200).send(data)
        // res.status(201).send('Games imported successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error importing games');
    }
};
