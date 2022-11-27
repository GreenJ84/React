import { MongoClient, MongoDBNamespace } from "mongodb";
import { NextApiHandler, NextApiRequest } from "next"
import * as dotenv from 'dotenv'

const NewMeetupHandler: NextApiHandler = async (req, res) => {
    dotenv.config()

    if (req.method === 'POST') {
        const data = req.body

        const client = new MongoClient(process.env.DB_CONN_STRING!)
        const db = client.db()

        const meetupsCollection = db.collection(process.env.COLLECTION_NAME!)

        const result = await meetupsCollection.insertOne(data);

        client.close()

        res.status(201).json({sucess: true, message: 'Meetup Inserted!'})
    }
}

export default NewMeetupHandler;
