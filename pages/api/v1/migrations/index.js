import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  if (request.method === "GET") {
    const migration = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,

      dryRun: true,

      dir: join("infra", "migrations"),
      direction: "up",
      log: () => {},

      migrationsTable: "pgmigrations",
    });

    return response.status(200).json(migration);
  } else if (request.method === "POST") {
    const migration = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dir: join("infra", "migrations"),
      direction: "up",
      log: () => {},
      migrationsTable: "pgmigrations",
    });

    return response.status(200).json(migration);
  }

  return response.status(405).json({ error: "Method not allowed" });
}
