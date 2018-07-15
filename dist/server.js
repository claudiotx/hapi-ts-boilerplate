"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("hapi");
const mongoose = require("mongoose");
class Server {
    constructor(port = 3000) {
        this.routes = [];
        this.connectToDb = () => __awaiter(this, void 0, void 0, function* () {
            mongoose.connection.once('open', () => {
                console.log(`server connected to mongodb`);
            });
            return mongoose.connect('mongodb://127.0.0.1/hapi');
        });
        this.server = new hapi_1.Server({
            port: 4300,
            host: 'localhost'
        });
        // this.app = express();
        // this.port = port;
        // this.app.set('port', port);
        // this.config();
        // this.database();
    }
    database() {
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
    start() {
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
exports.default = Server;
//# sourceMappingURL=server.js.map