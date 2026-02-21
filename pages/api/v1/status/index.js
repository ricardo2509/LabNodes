import database from "../../../../infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const responseBody = await database.query("SHOW server_version;");

  const maxDatabaseConnections = await database.query("SHOW max_connections;");
  const maxDatabaseConnectionsValue =
    maxDatabaseConnections.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const openConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity where datname = $1;",
    values: [databaseName],
  });

  const openConnectionsCount = openConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: responseBody.rows[0].server_version,
        max_connections: parseInt(maxDatabaseConnectionsValue),
        open_connections: openConnectionsCount,
      },
    },
  });
}

export default status;
