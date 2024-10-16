import { expect, Page } from "@playwright/test";

export default class CartPage{

    constructor(public page: Page){
        this.page = page;
    }

}