import mongoose, {Schema} from 'mongoose';
const antonymSchema = new Schema(
    {
        root_id: String,
        antonym: String,
        antonymTranslateRu: String,
        antonymTranslateEn: String,
        antonymTranslateFr: String,
    },
    {
        timestamps: true
    }
);

const antonym = mongoose.model('antonym', antonymSchema );

export default antonym;