import mongoose from './../Mongoose';
import isEmail from 'validator/lib/isEmail';

const ManagerSchema = new mongoose.Schema({
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
});
const Manager = mongoose.model('Manager', ManagerSchema);

export default Manager;
