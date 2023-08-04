import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema(
    {
        week: Number,
        homeTeam: String,
        awayTeam: String,
        spread: Number,
        // TODO: other game details...
        // FIXME: How to handle odds info --> Will be saved after parsing espn so might not need to worry
        favorite: String
    }
)

export default mongoose.model('Game', gameSchema)
