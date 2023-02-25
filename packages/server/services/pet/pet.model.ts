import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true      
    }
})

const petModel = mongoose.model<mongoose.Document>('Pet', petSchema);

export default petModel;