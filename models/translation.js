import mongoose, {Schema} from 'mongoose';
const translationSchema = new Schema(
    {
        root_id: String,
        preposition: String,
        translate: String,
        sentence: String,
        sentenceTranslate: String,
        sentenceSound: String
    },
    {
        timestamps: true
    }
);

const translation = mongoose.model('translation', translationSchema );

export default translation;        