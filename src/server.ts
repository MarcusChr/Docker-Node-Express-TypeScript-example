import express from 'express';
import { router as PersonRouter } from "./controllers/PersonController";

const app = express();
const port: number = 8080;

app.use("/person", PersonRouter);

app.use("/", (req, res, next) => {
    res.json({
        something: {
            yes: "no",
            100: 200
        },
        panda: true,
        Jorgen: "leth"
    });
});

app.listen(8080, () => {
    console.log(`Listening on port ${port}`);
});