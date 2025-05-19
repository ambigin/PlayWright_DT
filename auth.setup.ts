import { chromium,FullConfig } from "@playwright/test";
import { pageUrlEnum } from "./Enum/pageUrlEnum";
import { LoginPage } from "./PageService/LoginPage";
import { HomePage } from "./PageService/HomePage";

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await page.goto(pageUrlEnum.LoginPage);
    await loginPage.login(" ","")
    await page.pause();
    await homePage.selectDealer("Digital Contracting of Massachusetts");
    await page.context().storageState({ path: 'auth.json' });
    await browser.close();
}

export default globalSetup;