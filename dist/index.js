"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const app = new server_1.default(process.env.PORT || 8080);
app.start();
//# sourceMappingURL=index.js.map