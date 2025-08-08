const { test, expect } = require('@playwright/test');

test('Test Vite + React page', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click on the Vite logo
  await page.click('a[href="https://vite.dev"] img');

  // Click on the React logo
  await page.click('a[href="https://react.dev"] img');

  // Get the heading text
  const headingText = await page.textContent('h1');
  console.log('Heading:', headingText);

  // Click the button
  await page.click('button');

  // Get the paragraph text
  const paragraphText = await page.textContent('p');
  console.log('Paragraph:', paragraphText);

  // Get the code text
  const codeText = await page.textContent('code');
  console.log('Code:', codeText);
});