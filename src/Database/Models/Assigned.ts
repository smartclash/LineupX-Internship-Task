import mongoose from './../Mongoose';

const AssignedSchema = new mongoose.Schema({
    assgined_date: {
        type: Date,
        required: true,
    },
    closed_date: {
        type: Date,
        required: true,
    },
    accepted: {
        type: Boolean,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager'
    },
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
    },
});
const Assigned = mongoose.model('Assigned', AssignedSchema);

export default Assigned;
