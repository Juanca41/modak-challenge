import { expect, Page } from "@playwright/test";

export default class CartPage{

    cartPageURL: string;

    constructor(public page: Page){
        this.page = page;
        this.cartPageURL = "/shoppingcart"
    }

    cartTitle = () => this.page.locator(".cart-header-title");
    cartItem = () => this.page.locator(".group-shop-container");

    async inCartPage(){
        await this.page.waitForLoadState("domcontentloaded");
        expect(this.page.url()).toContain(this.cartPageURL);
        return true;
    }
    
    async verifyThereIsOneItemAdded(){
        await expect(this.cartTitle()).toContainText("(1)");
        await expect(this.cartItem()).toHaveCount(1);
    }
}