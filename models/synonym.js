import mongoose, {Schema} from 'mongoose';
const synonymSchema = new Schema(
    {
        root_id: String,
        synonym: String,
        synonymTranslateRu: String,
        synonymTranslateEn: String,
        synonymTranslateFr: String
    },
    {
        timestamps: true
    }
);

const synonym = mongoose.model('synonym', synonymSchema );

export default synonym;