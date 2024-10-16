import { expect, Page } from "@playwright/test";

export default class SearchResultsPage{

    secondPageURL: string;

    constructor(public page: Page){
        this.page = page;
        this.secondPageURL= "page=2";
    }

    secondPageButton = () => this.page.locator("ul.comet-pagination > li.comet-pagination-item-2 > a");
    secondItemDisplayed = () => this.page.locator("#card-list > div:nth-child(2)");
    secondItemAddToCartButton = () => this.page.locator("#card-list > div:nth-child(2) div.multi--shopCart--darm7xs");
    addToCartButton = () => this.page.locator(".comet-v2-modal-content button.comet-v2-btn");
    sideCartList = () => this.page.locator("#sidecart");
    goToCartSideButton = () => this.page.locator(".cart-summary-tocart");

    async inSearchResultsPage(searchValue: string){
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.title()).toContain(searchValue);
        return true;
    }

    async goToSecondPageOfResults(){
        await this.secondPageButton().click();
    }
    
    async verifyUserIsInTheSecondPage(){
        await this.page.waitForLoadState("domcontentloaded");
        expect(this.page.url()).toContain(this.secondPageURL);
    }
    
    // async selectSecondItemDisplayed(){
    //     await this.secondItemDisplayed().click();
    // }

    async clickCartButtonInSecondItemDisplayed(){
        await this.secondItemAddToCartButton().click();
    }

    async addSecondItemDisplayedToCart(){
        await this.clickCartButtonInSecondItemDisplayed();
        await this.addToCartButton().click();
    }
    
    async goToCartPage(){
        await expect(this.sideCartList()).toBeVisible();
        await this.goToCartSideButton().click();
    }
}