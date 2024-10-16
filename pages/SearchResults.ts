import { expect, Page } from "@playwright/test";

export default class SearchResultsPage{

    constructor(public page: Page){
        this.page = page;
    }
}