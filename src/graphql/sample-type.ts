import { GraphQLObjectType, GraphQLString } from 'graphql';

// GraphQL types
const SampleType = new GraphQLObjectType({
  name: 'Sample',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    entry: { type: GraphQLString }
  })
});

export default SampleType;
