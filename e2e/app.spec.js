import { test, expect } from '@playwright/test';

test('Validating Home page', async ({ page }) => {
    await page.goto('/');
    const title = page.locator('h1');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Vite + React');
    const logo = page.locator('button');
    await expect(logo).toBeVisible();
});
