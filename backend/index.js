const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/authRouter');
const emitRouter = require('./routers/emissionRouter');
const cors = require('cors');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: ['http://localhost:5173', '*'],
        credentials: true,
    }
));
app.use(authRouter);
app.use(emitRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
