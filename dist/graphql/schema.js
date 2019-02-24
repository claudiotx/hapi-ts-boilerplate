"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const SampleType = require('./sample-type');
const Sample = require('../models/sample');
const rootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        sample: {
            type: SampleType,
            args: { id: { type: graphql_1.GraphQLString } },
            resolve(parent, args) {
                return Sample.findById(args.id);
            }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: rootQuery
});
//# sourceMappingURL=schema.js.map