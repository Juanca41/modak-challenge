import {expect } from '@playwright/test';
import { test } from "../fixtures/base"

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
});

test('has title', async ({homePage}) => {
  
  const valueToSearch = "instax mini";
  expect (await homePage.inHomePage()).toBe(true);
});
