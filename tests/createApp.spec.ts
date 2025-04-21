import { test, expect } from '@playwright/test';

test('logs In to DealerTrack', async ({ page }) => {

  await page.goto('https://signin.coxautoinc.com/?solutionID=DTCOM_qa&clientId=c98d164b51aa4e0587bb0d208766fe23');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('bamaty');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('a%LA@Y9&G$%895M');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(10000)

  // await page.getByRole('button', {name: 'Select'}).click();
  // await page.locator('#button-verify-by-sms').click();
  await page.click("[id='button-verify-by-sms']");
  await page.waitForTimeout(2000)

  await page.locator('#nput-verification-code').fill('123145');
  await page.getByRole('link', { name: 'Switch Dealership' }).click();
  await page.getByRole('link', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Digital Contracting of California' }).click();
  await page.getByText('Create').click();
  await page.getByRole('link', { name: 'Credit Application' }).click();
  await page.getByRole('link', { name: 'Credit Application' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Donald');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Minton');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.goto('https://ww2.uat.dealertrack.app.coxautoinc.com/dealjackets/510200001047945747/deals/510200001047945750/application/one/#togglepage1');
  await page.getByRole('radio', { name: 'Used' }).check();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.locator('button[name="_continue_"]').click();

});