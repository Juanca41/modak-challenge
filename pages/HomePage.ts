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
        expect(await this.page.title()).toContain(this.baseTitle);
        await this.closeNotificationsAlert().click();
        await expect(this.titleLogo()).toBeVisible();
        return true;
    }

    async fillSearchField(value:string){
        await this.searchField().fill(value);
        await expect(this.searchField()).toHaveValue(value)
    }

    async clickSearchButton(){
        await this.searchButton().click();
    }

    async search(value:string){
        await this.fillSearchField(value);
        await this.clickSearchButton();
    }
}