import { test, expect } from "../../../fixtures/api/gorest/api.js";
import userData from "../../../test-data/api/gorest/users.json" with { type: "json" };
import { createUser } from "../../../helpers/api/gorest/user.helper.js";

test("create a user", async ({ api }) => {
    const user = await createUser(api, userData);

    expect(user.name).toBe(userData.validUser.name);
    expect(user.status).toBe(userData.validUser.status);
    expect(user.id).toBeTruthy();
});

test("get a user", async ({ api }) => {
    const createdUser = await createUser(api, userData);

    const response = await api.get(`users/${createdUser.id}`);

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user.name).toBe(userData.validUser.name);
    expect(user.status).toBe(userData.validUser.status);
    expect(user.id).toBe(createdUser.id);
    expect(user.email).toBe(createdUser.email);
});

test("update a user", async ({ api }) => {
    const createdUser = await createUser(api, userData);

    const response = await api.patch(`users/${createdUser.id}`, {
        data: {
            name: userData.updatedUser.name,
        },
    });

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user.id).toBe(createdUser.id);
    expect(user.name).toBe(userData.updatedUser.name);
});
