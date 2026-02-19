const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {

  await page.goto('https://advisebridge.com/advisors');

  // Title
  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);
  await expect(page).toHaveTitle('AdviseBridge');

  // URL
  const pageURL = await page.url();
  console.log('Page URL is:', pageURL);
  await expect(page).toHaveURL('https://advisebridge.com/advisors');

  await page.close();
});

