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
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
});
const Job = mongoose.model('Job', JobSchema);

export default Job;
