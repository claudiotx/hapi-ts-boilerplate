import WeekendEntry from './weekend-entry';
import { Document } from 'mongoose';
interface EntryModelInterface extends WeekendEntry, Document {};
export default EntryModelInterface;