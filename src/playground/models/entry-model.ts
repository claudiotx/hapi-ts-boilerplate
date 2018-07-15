import EntryModelInterface from '../interfaces/entry-model-interface';
import { Schema, Model, model } from 'mongoose';

const EntrySchema: Schema = new Schema({
    name: String,
    description: String,
    category: String
});

const EntryModel: Model<EntryModelInterface> = model<EntryModelInterface>('Entry', EntrySchema);

export { EntryModel };
