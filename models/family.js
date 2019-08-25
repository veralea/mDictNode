import mongoose, {Schema} from 'mongoose';
const familySchema = new Schema(
    {
        root_id: String,
        family: String,
        familyPosition: String,
        familyTranslateRu: String,
        familyTranslateEn: String,
        familyTranslateFr: String
    },
    {
        timestamps: true
    }
);

const family = mongoose.model('family', familySchema );

export default family;