import exchangeDB from "../../../../infra/exchangeRateDB";

async function addExchangeRate(request, response) {
  const exchangeRateValues = request.body;
  try {
    var newExchangeRate = await exchangeDB.create(
      exchangeRateValues.rate,
      exchangeRateValues.currency_id,
    );

    response.status(200).json(newExchangeRate);
  } catch (error) {
    throw error;
  }
}

export default addExchangeRate;
