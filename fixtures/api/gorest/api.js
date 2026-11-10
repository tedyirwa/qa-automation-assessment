import { test as base, expect } from "@playwright/test";

export const test = base.extend({
    api: async ({ playwright }, use) => {
        const api = await playwright.request.newContext({
            baseURL: "https://gorest.co.in/public/v3/",
            extraHTTPHeaders: {
                Authorization: `Bearer ${process.env.GOREST_TOKEN}`,
                Accept: "application/json",
            },
        });

        await use(api);
        await api.dispose();
    },
});

export { expect };
