"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SampleSchema = new Schema({
    name: String,
    entry: String
});
exports.default = mongoose.model('Sample', SampleSchema);
//# sourceMappingURL=sample.js.map