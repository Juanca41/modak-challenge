import {expect } from '@playwright/test';
import { test } from "../fixtures/base"

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
});

test('Verify the second item from the second results page has at least 1 item to be bought', async ({homePage, searchResultsPage, cartPage}) => {
  
  const valueToSearch = "instax mini";
  expect (await homePage.inHomePage()).toBe(true);
  await homePage.search(valueToSearch);
  expect (await searchResultsPage.inSearchResultsPage(valueToSearch)).toBe(true);
  await searchResultsPage.goToSecondPageOfResults();
  await searchResultsPage.verifyUserIsInTheSecondPage();
  await searchResultsPage.addSecondItemDisplayedToCart();
  await searchResultsPage.goToCartPage()
  expect (await cartPage.inCartPage()).toBe(true);
  await cartPage.verifyThereIsOneItemAdded();
});
