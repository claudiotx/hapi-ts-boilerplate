import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
  name: String,
  entry: String
});

export default mongoose.model('Sample', SampleSchema);