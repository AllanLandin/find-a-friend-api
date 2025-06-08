import { expect, it, describe, beforeAll, afterAll } from "vitest";
import request from "supertest";
import { app } from "../../../app";
import { makeOrg } from "../../../../tests/factories/make-org";

describe("Create org test", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a new org", async () => {
    const response = await request(app.server)
      .post("/auth/org/register")
      .send(makeOrg());

    expect(response.status).toBe(201);
  });
});
