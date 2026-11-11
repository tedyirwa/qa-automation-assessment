import { randomUUID } from "node:crypto";
import { expect } from "@playwright/test";

export async function createUser(api, userData) {
    const response = await api.post("users", {
        data: {
            name: userData.validUser.name,
            email: `tedy-${randomUUID()}@irwa.com`,
            status: userData.validUser.status,
        },
    });

    expect(response.status()).toBe(201);

    return await response.json();
}
