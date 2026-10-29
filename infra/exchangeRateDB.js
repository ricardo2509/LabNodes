import database from "./database";

async function create(rate, currency_id) {
  try {
    const queryTexto = `
      INSERT INTO exchange_rate (id, rate, currency_id, created_at) 
      VALUES (gen_random_uuid(), $1, $2, NOW()) 
      RETURNING *;
    `;
    const valores = [rate, currency_id];
    const resultado = await database.queryParam(queryTexto, valores);

    return resultado.rows[0];
  } catch (error) {
    throw error;
  }
}

var feat = {
  create,
};

export default feat;
