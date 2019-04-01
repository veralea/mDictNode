import mongoose from'mongoose';
import'../models/Root';

const Room = mongoose.model('Root');

export function setUpConnection() {
    mongoose.connect('mongodb://mordict-6135:jMHRmt2GGY1ZyK0ksaBqhvqNSFqA6h@db-mordict-6135.nodechef.com:5383/mordict');
}

export function listRoots() {
    return Root.find();
}