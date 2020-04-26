import mongoose from './../Mongoose';
import isEmail from 'validator/lib/isEmail';

const RecruiterSchema = new mongoose.Schema({
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
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
});
const Recruiter = mongoose.model('Recruiter', RecruiterSchema);

export default Recruiter;
