import axios from "axios";

export default async (req, res) => {
    const week: number = Number(req.query.week);
    const gameId: number = Number(req.query.gameId);
    const odds: boolean = req.query.odds === 'true';
    const schedule: boolean = req.query.schedule === 'true';

    if (week) {
        // Retrieve games for a specific week
        try {
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

            // Send the response containing the data
            res.status(200).send(data)
        } catch (err) {
            console.error(err);
            res.status(500).send('Error importing games from Week ' + week);
        }
    } else if (gameId) {
        // Retrieve a specific game by its ID
        try {
            // Fetch the data from the ESPN CDN
            const response = await axios.get(process.env.NFL_GAME_ENDPOINT! + `${gameId}/competitions/${gameId}/${(odds ? `/odds` : '')}`, { params: { xhr: 1 } });
            const data = response.data; // Adjust this line based on the actual structure of the response

            // Send the response containing the data
            res.status(200).send(data)
        } catch (err) {
            console.error(err);
            res.status(500).send(`Error importing game ${gameId}`);
        }
    }
    else if (schedule) {
        try {
            const response = await axios.get(process.env.NFL_SCOREBOARD_ENDPOINT!, { params: { xhr: 1, seasontype: 2, week: 2 } });
            const data = response.data; // Adjust this line based on the actual structure of the response

            // Send the response containing the data
            res.status(200).send(data)
        }
        catch {

        }
    }
    else {
        console.log(schedule)

        // Handle an error or default action
        res.status(400).send('Error in query')
    }
}
