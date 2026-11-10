import { randomUUID } from "node:crypto";
import { test, expect } from "../../fixtures/api.js";

async function createUser(api) {
    const response = await api.post("users", {
        data: {
            name: "Tedy QA",
            email: `qa-${randomUUID()}@example.com`,
            status: "active",
        },
    });

    expect(response.status()).toBe(201);

    return await response.json();
}

test("create a user", async ({ api }) => {
    const user = await createUser(api);

    expect(user.name).toBe("Tedy QA");
    expect(user.status).toBe("active");
    expect(user.id).toBeTruthy();
});

test("get a user", async ({ api }) => {
    const createdUser = await createUser(api);

    const response = await api.get(`users/${createdUser.id}`);

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user.id).toBe(createdUser.id);
    expect(user.email).toBe(createdUser.email);
});

test("update a user", async ({ api }) => {
    const createdUser = await createUser(api);

    const response = await api.patch(`users/${createdUser.id}`, {
        data: {
            name: "Tedy QA Updated",
        },
    });

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user.id).toBe(createdUser.id);
    expect(user.name).toBe("Tedy QA Updated");
});
