import mongoose, {Schema} from 'mongoose';
const familyverbSchema = new Schema(
    {
        root_id: String,
        familyverb: String,
        familyverbPosition: String,
        familyverbTranslateRu: String,
        familyverbTranslateEn: String,
        familyverbTranslateFr: String
    },
    {
        timestamps: true
    }
);

const familyverb = mongoose.model('familyverb', familyverbSchema );

export default familyverb;