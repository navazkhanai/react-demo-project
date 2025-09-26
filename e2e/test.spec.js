const { test, expect } = require('@playwright/test');

test('Basic Test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  // Add your assertions and actions here
  await expect(page).toHaveTitle('Vite + React');

  // Check if the Vite logo is present and has the correct URL
  const viteLogo = page.locator('a[href="https://vitejs.dev"] img[alt="Vite logo"]');
  await expect(viteLogo).toBeVisible();

  // Check if the React logo is present and has the correct URL
  const reactLogo = page.locator('a[href="https://react.dev"] img[alt="React logo"]');
  await expect(reactLogo).toBeVisible();

  // Check if the main heading is present
  const mainHeading = page.locator('h1');
  await expect(mainHeading).toHaveText('Vite + React');

  // Check if the button is present and has the correct initial text
  const button = page.locator('button');
  await expect(button).toHaveText('count is 0');

  // Check if the first paragraph is present and has the correct text
  const firstParagraph = page.locator('p');
  await expect(firstParagraph).toHaveText('Edit src/App.jsx and save to test HMR');

  // Check if the second paragraph is present and has the correct text
  const secondParagraph = page.locator('p').nth(1);
  await expect(secondParagraph).toHaveText('Click on the Vite and React logos to learn more');
});