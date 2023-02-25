import mongoose from 'mongoose';

import Owner from './owner.interface';

const addressSchema = new mongoose.Schema({
    street: String,
    barangay: String,
    city: String,
    province: String
});

const ownerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: addressSchema
});

const ownerModel = mongoose.model<Owner & mongoose.Document>('Owner', ownerSchema);

export default ownerModel;