import mongoose, {Schema} from 'mongoose';
const antonymSchema = new Schema(
    {
        root_id: String,
        antonym: String,
        antonymTranslate: String
    },
    {
        timestamps: true
    }
);

const antonym = mongoose.model('antonym', antonymSchema );

export default antonym;