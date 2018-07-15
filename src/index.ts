import Server from './server';
const app = new Server(process.env.PORT || 8080);
app.start();