const request = require("supertest");
const app = require("../src/app");

describe("service-b", () => {
  test("hello endpoint exposes service name", async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
    expect(response.body.service).toBeDefined();
  });
});
