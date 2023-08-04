import mongoose from 'mongoose'

const UserId = { type: mongoose.Types.ObjectId, ref: 'User' }

const leagueSchema = new mongoose.Schema(
    {
        name: String,
        commissioner: UserId,
        participants: [UserId],
        weeklyContribution: Number,
        settings: {
            spreadsPerWeek: Number,
            // other settings can be added here...
        },
        // TODO: other league properties...
    }
)

export default mongoose.model('League', leagueSchema)
