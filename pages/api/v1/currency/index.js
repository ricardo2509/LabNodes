import database from "../../../../infra/database";

async function listCurrency(request, response) {
  const databaseName = process.env.POSTGRES_DB;
  const ret = await database.query({
    text: "Select id, currency_code, currency_country, created_at from currency;",
    database: "local_db",
  });
  const returnRates = ret.rows;

  response.status(200).json(returnRates);
}

export default listCurrency;
