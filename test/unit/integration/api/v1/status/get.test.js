test("GET to /api/v1/status should returns 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);

  //console.log("Response:", response);
  //  console.log("Response data:", response.data);

  const data = await response.json();
  expect(data).toHaveProperty("dependencies");
  expect(data.dependencies).toHaveProperty("database");
  expect(data.dependencies.database).toHaveProperty("version");
  //  expect(data.dependencies.database).toHaveProperty("status");
  //  expect(data.dependencies.database.status).toBe("ok");
});
