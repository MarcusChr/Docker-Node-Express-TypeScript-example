import bodyParser from "body-parser";
import Express from "express";
import { Person } from "../model/Person";
import { PersonCollection } from "../model/PersonCollection";

export const router = Express.Router();
const personCollection = PersonCollection;

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
    res.json(personCollection.Collection);
});

router.post("/", (req, res) => {
    try {
        let person: Person = req.body;
        console.log(person); //Outputs the content of person
        personCollection.Collection.push(person);
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
});