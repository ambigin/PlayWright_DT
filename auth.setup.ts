import { chromium,FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://signin.coxautoinc.com/?solutionID=DTCOM_qa&clientId=c98d164b51aa4e0587bb0d208766fe23');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('smanan');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Toast@123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.pause();
    await page.getByRole('link', { name: 'Switch Dealership' }).click();
    await page.getByRole('link', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Digital Contracting of California' }).click();

    await page.context().storageState({ path: 'auth.json' });

    await browser.close();
}

export default globalSetup;