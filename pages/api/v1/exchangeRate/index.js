import database from "../../../../infra/database";

async function listExchangeRate(request, response) {
  const databaseName = process.env.POSTGRES_DB;
  const ret = await database.query({
    text: "Select * from exchange_rate inner join currency on currency.id = exchange_rate.currency_id;",
    database: "local_db",
  });
  const returnRates = ret.rows;

  response.status(200).json(returnRates);
}

export default listExchangeRate;
