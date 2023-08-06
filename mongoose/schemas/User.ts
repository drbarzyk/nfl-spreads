import mongoose from 'mongoose'

const LeagueId = { type: mongoose.Types.ObjectId, ref: 'League' }

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String, // hashed
        email: String,
        leagues: [LeagueId],
        // TODO: other user profile information...
    }
)

export default mongoose.model('User', userSchema)
