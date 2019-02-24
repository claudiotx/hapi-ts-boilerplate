"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EntrySchema = new mongoose_1.Schema({
    name: String,
    description: String,
    category: String
});
const EntryModel = mongoose_1.model('Entry', EntrySchema);
exports.EntryModel = EntryModel;
//# sourceMappingURL=entry-model.js.map