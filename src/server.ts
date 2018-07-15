import { Server as HapiServer } from 'hapi';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
// import * as HapiSwagger from 'hapi-swagger'; // Documentation
import * as Inert from 'inert'; // Static file and directory handlers plugin for hapi.js
import * as Vision from 'vision'; // Templates rendering plugin support for hapi.js
// GraphQL plugins
import { graphqlHapi,  graphiqlHapi } from 'apollo-server-hapi';

class Server {
  protected server: any;
  private db: mongoose.Connection;
  private routes: string[] = [];
  public port: number | string;

  constructor(port: number | string = 3000) {
    this.server = new HapiServer({
      port: 4300,
      host: 'localhost'
    });
    // this.app = express();
    // this.port = port;
    // this.app.set('port', port);
    // this.config();
    // this.database();
  }

  private connectToDb = async () => {
    mongoose.connection.once('open', () => {
      console.log(`server connected to mongodb`);
    });
    return mongoose.connect('mongodb://127.0.0.1/hapi');
  }

  private database(): void {
    mongoose.connect(process.env.MONGODB_URI);
    this.db = mongoose.connection;
    this.db.once('open', () => {
      console.log('Database started');
    });
    mongoose.connection.on('error', () => {
      console.log('MongoDB connection error. Please make sure MongoDB is running.');
      process.exit();
    });
  }

  public start(): void {
    Promise.all([
      // registerPluginGraphiql(),
      // registerPluginGraphql(),
      // registerSwaggerPlugin(),
      this.connectToDb(),
    ]).then(result => {
      this.server.start();
      // setRoutes();
      console.log(`server running at ${this.server.info.uri}`);
    }).catch(err => {
      console.log(`error ${err}`);
    });
  }
}

export default Server;