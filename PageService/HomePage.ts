import { Page } from "@playwright/test";
import { DefaultPage } from "./DefaultPage";
import { homePageObject } from "../Pageobjects/homePageObject";

export class HomePage{
    private page: Page
    private defaultPage: DefaultPage

    constructor(page:Page){
        this.page = page;
        this.defaultPage = new DefaultPage(page);
    }

    async selectDealer(dealer:string){
        await this.defaultPage.getByRole(...homePageObject.switchDealerBtn).click();
        await this.defaultPage.getByRole(...homePageObject.searchLink).click();
        await this.defaultPage.getByLinkText(homePageObject.selectDealerLinkTextLocator(dealer)).click();
    }
}