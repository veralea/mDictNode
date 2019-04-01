import mongoose, {Schema} from 'mongoose';
const sentenceSchema = new Schema(
    {
        root_id: String,
        sentence: String,
        sentenceTranslate: String,
        sentenceSound: String
    },
    {
        timestamps: true
    }
);

const sentence = mongoose.model('sentence', sentenceSchema );

export default sentence;