import mongoose, {Schema} from 'mongoose';
const phraseSchema = new Schema(
    {
        root_id: String,
        phrase: String,
        phraseTranslateRu: String,
        phraseTranslateEn: String,
        phraseTranslateFr: String,
    },
    {
        timestamps: true
    }
);

const phrase = mongoose.model('phrase', phraseSchema );

export default phrase;