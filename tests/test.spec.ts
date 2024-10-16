import {expect } from '@playwright/test';
import { test } from "../fixtures/base"

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
});

test('has title', async ({homePage, searchResultsPage}) => {
  
  const valueToSearch = "instax mini";
  expect (await homePage.inHomePage()).toBe(true);
  await homePage.search(valueToSearch);
  expect (await searchResultsPage.inSearchResultsPage(valueToSearch)).toBe(true);
  await searchResultsPage.goToSecondPageOfResults();
  await searchResultsPage.verifyUserIsInTheSecondPage();
  await searchResultsPage.addSecondItemDisplayedToCart();
});
