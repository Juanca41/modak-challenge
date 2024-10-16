import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('has title', async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");

  const homePage = new HomePage(page);
  expect (await homePage.inHomePage()).toBe(true);
});
