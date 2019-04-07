import mongoose, {Schema} from 'mongoose';
const translationSchema = new Schema(
    {
        root_id: String,
        preposition: String,
        translateRu: String,
        translateEn: String,
        translateFr: String,
        sentence: String,
        sentenceTranslateRu: String,
        sentenceTranslateEn: String,
        sentenceTranslateFr: String,
        sentenceSound: String
    },
    {
        timestamps: true
    }
);

const translation = mongoose.model('translation', translationSchema );

export default translation;        