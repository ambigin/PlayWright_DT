import { Page } from '@playwright/test';
import { DefaultPage } from './DefaultPage';
import { loginPageObject } from '../Pageobjects/loginPageObject';

export class LoginPage{
    private page: Page;
    private defaultPage: DefaultPage;

    constructor(page: Page){
        this.page = page;
        this.defaultPage = new DefaultPage(page);
    }

    async login(username:string,password:string){
        await this.defaultPage.getByName(loginPageObject.usernameNameLocator).fill(username);
        await this.defaultPage.getById(loginPageObject.loginIdLocator).click();
        await this.defaultPage.getByName(loginPageObject.passwordNameLocator).click();
        await this.defaultPage.getByName(loginPageObject.passwordNameLocator).fill(password);
        await this.defaultPage.getById(loginPageObject.loginIdLocator).click();
    }
}