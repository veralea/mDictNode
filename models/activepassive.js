import mongoose, {Schema} from 'mongoose';
const activepassiveSchema = new Schema(
    {
        active_id: String,
        passive_id: String
    },
    {
        timestamps: true
    }
);

const activepassive = mongoose.model('activepassive', activepassiveSchema );

export default activepassive;