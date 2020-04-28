import mongoose from './../Mongoose';
import isEmail from 'validator/lib/isEmail';

const CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email ID is required'],
        validate: {
            validator: (email: string) => isEmail(email)
        },
    },
    title: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    assigned_job: {
        type: mongoose.Schema.Types.ObjectId,
    },
});
const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;
