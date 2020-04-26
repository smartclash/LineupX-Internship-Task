import * as mongoose from 'mongoose';

const CONNECTION_URL: string = 'mongodb://'
    + process.env.DB_HOST + ':' 
    + process.env.DB_PORT + '/'
    + process.env.DB_NAME;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose;
