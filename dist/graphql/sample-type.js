"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// GraphQL types
const SampleType = new graphql_1.GraphQLObjectType({
    name: 'Sample',
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        entry: { type: graphql_1.GraphQLString }
    })
});
exports.default = SampleType;
//# sourceMappingURL=sample-type.js.map