import mongoose from './../Mongoose';

const JobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    assigned_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
    },
    accepted: {
        type: String,
        default: 'unknown',
    },
    completed: {
        type: Boolean,
        default: false,
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
    },
});
const Job = mongoose.model('Job', JobSchema);

export default Job;
