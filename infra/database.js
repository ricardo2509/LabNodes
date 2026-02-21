import { Client } from "pg";

async function query(qry) {
  const client = await getNewClient();

  //  console.log(client);

  const response = await client.query(qry);
  await client.end();
  return response;
}

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: false,
  });

  await client.connect();
  return client;
}

export default {
  query,
  getNewClient,
};
