const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite \+ React/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the get started link.
  await page.click('a:has-text("Vite logo")');

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('h1')).toContainText('Vite');
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the get started link.
  await page.click('a:has-text("React logo")');

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('h1')).toContainText('React');
});

test('check count', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expects page to have a button with the name of count is 0.
  await expect(page.locator('button')).toContainText('count is 0');
});

test('check text', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expects page to have a text with the name of Edit.
  await expect(page.locator('text=Edit')).toBeVisible();
});

