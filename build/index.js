"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
app.get('/', (req, res) => {
    const num = 12;
    res.json({ message: 'hello this is ts tutorial', number: num });
    // also try showing typeof num
});
app.listen(PORT, () => {
    console.log('server is running');
});
