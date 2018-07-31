import { graphql, GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
const SampleType = require('./sample-type');
const Sample = require('../models/sample');

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    sample: {
      type: SampleType,
      args: { id: {type: GraphQLString} },
      resolve(parent: any, args: any) {
        return Sample.findById(args.id);
      }      
    }
  }
})

export default new GraphQLSchema({
  query: rootQuery
})