import database from "../../../../infra/database";

async function listExchangeRate(request, response) {
  const databaseName = process.env.POSTGRES_DB;
  const ret = await database.query({
    text: "Select exchange_rate.id, rate, exchange_rate.currency_id, exchange_rate.created_at, currency_code, currency_country from exchange_rate inner join currency on currency.id = exchange_rate.currency_id order by exchange_rate.created_at;",
    database: "local_db",
  });
  const returnRates = ret.rows;

  console.log(returnRates);
  response.status(200).json(returnRates);
}

export default listExchangeRate;
