const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API running');
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ilc8iz8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const subscribeCollection = client.db('Animator').collection('subscribers');
        app.post('/subscribers', async (req, res) => {
            const subscriber = req.body;
            const result = await subscribeCollection.insertOne(subscriber);
            if (result) {
                res.send({
                    success: true,
                    message: 'Subscribed'
                })
            }
        })

    }
    finally {

    }
}

run().catch(e => console.error(e));

app.listen(port, () => {
    console.log('Server running on port: ', port)
})