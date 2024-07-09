const app = require('express')();
const PORT = 8080;

const { Client } = require('pg');

const db = new Client({

    ssl: {
        rejectUnauthorized: false,
      }
})

db.connect();

app.listen(PORT);

app.get('/registration', async (req, res) => {
    const dbRes = await getWorkshops();
    res.status(200).send(dbRes)
})

async function getWorkshops(data, table, condition) {
    try {
      const res = await db.query(`SELECT * FROM workshop`);
      db.end;
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  }