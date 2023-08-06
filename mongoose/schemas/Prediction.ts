import mongoose from 'mongoose'

const UserId = { type: mongoose.Types.ObjectId, ref: 'User' }
const GameId = { type: mongoose.Types.ObjectId, ref: 'Game' }
const LeagueId = { type: mongoose.Types.ObjectId, ref: 'League' }

const predictionSchema = new mongoose.Schema(
    {
        user: UserId, // The UserID of the user who made the pick
        league: LeagueId, // The LeagueID of the league the pick is for
        week: Number, // The week number for which the pick is made
        picks: [{
            game: GameId, // GameID representing the games for which the user made pick
            spreadChosen: Number // Number representing the spread chosen by the user for game
        }],
        // TODO: other prediction details...
    }
)

export default mongoose.model('Prediction', predictionSchema)
