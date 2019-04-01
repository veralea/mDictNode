import mongoose, {Schema} from 'mongoose';
const familySchema = new Schema(
    {
        root_id: String,
        family: String,
        familyTranslate: String,
    },
    {
        timestamps: true
    }
);

const family = mongoose.model('family', familySchema );

export default family;