import { expect, Page } from "@playwright/test";

export default class HomePage{

    baseTitle : string;

    constructor(public page: Page){
        this.page = page;
        this.baseTitle = "AliExpress";
    }

    titleLogo = () => this.page.locator("//div[@data-spm='logo']")
    closeNotificationsAlert = () => this.page.locator("img._24EHh")
    searchField = () => this.page.locator('#search-words');
    searchButton = () => this.page.locator(".search--submit--2VTbd-T");

    async inHomePage(){
        await this.closeNotificationsAlert().click();
        await expect(this.titleLogo()).toBeVisible();
        return true;
    }

}