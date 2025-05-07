import { test, expect } from '@playwright/test';
 
test('Create application', async ({ page }) => {
  await page.goto('https://ww2.uat.dealertrack.app.coxautoinc.com/customer/search/');
  await page.fill('#id_first_name-maskedInput', 'Donald');
  await page.fill('#id_last_name-maskedInput', 'Minton');
  await page.click('#deal-creator-name-section');
  await page.click('#deal-creator-search');
 
  // Application form
  await expect(page).toHaveURL(/\/application\/one\//);
  await page.click('#id_vehicle_form-condition_type_2');
  await page.click('#prepage a');
 
  // Applicant details
  await page.click('#id_applicant_form-tax_id');
  await page.click('#id_applicant_form-birth_date');
  await page.fill('#id_applicant_form-tax_id', '651-23-1231');
  await page.fill('#id_applicant_form-birth_date', '01/01/1996');
  await page.fill('#id_applicant_form-line_1_address', '16011 Hillside Avenue');
  await page.click('#id_applicant_form-line_2_address');
  await page.fill('#id_applicant_form-zip_code', '96001');
  await page.type('#id_applicant_form-primary_phone_number', '3125431321');
  await page.type('#id_applicant_form-alternate_phone_number', '4126565343');
  await page.fill('#id_applicant_form-email_address', 'test@mail.com');
  await page.fill('#id_applicant_form-drivers_license_us_state_code', 'NY');
  await page.fill('#id_applicant_form-drivers_license', '1234');
  await page.selectOption('#id_applicant_form-housing_status_code', 'O');
  await page.fill('#id_applicant_form-current_address_years', '4');
  await page.fill('#id_applicant_form-current_address_months', '2');
  await page.fill('#id_applicant_form-mortgage_payment_or_rent', '1200');
 
  // Employment
  await page.click('#applicant div.income-disclaimer');
  await page.selectOption('#id_applicant_form-employment_status_code', 'Y');
  await page.fill('#id_applicant_form-organization_name','4');
  await page.fill('#id_applicant_form-current_employed_years', '5');
  await page.fill('#id_applicant_form-current_employed_months', '3');
  await page.type('#id_applicant_form-work_phone_number', '4128976553');
  await page.fill('#id_applicant_form-salary', '14000');
  await page.selectOption('#id_applicant_form-salary_type_code', 'M');
 
  // Vehicle
  await page.fill('#id_vehicle_form-vin_number', '1GNSCBKC8FR245868');
  await page.fill('#id_vehicle_form-wholesale_amount', '45000');
  await page.fill('#id_vehicle_form-odometer_number', '1500');
  await page.fill('#id_vehicle_form-term_count', '66');
  await page.fill('#id_vehicle_form-cash_sell_price_amount', '45000');
  await page.fill('#id_vehicle_form-sales_tax_amount', '0');
  await page.fill('#id_vehicle_form-title_and_license_amount', '0');
  await page.fill('#id_vehicle_form-cash_down_amount', '12000');
 
  // Submit form
    await page.locator('#id_applicant_form-city_state_dropdown').selectOption('KESWICK|CA');
 
  await page.click('#one-page-v4-form button');
 
  // Handle address modal
  await page.click('#address_parser_modal button');
 
  // Navigate to lender selection
  await expect(page).toHaveURL(/\/application\/selectlender/);
 
  // Lender selection
  // await page.click('fieldset:nth-of-type(1) span');
  // await page.click('div.span10 > div:nth-of-type(2) button.btn-primary');
  await page.click('button[name="_ap_continue_"]');
  await page.getByRole('checkbox', { name: 'First Help Financial' }).check();
 
  // Final page
  await expect(page).toHaveURL(/\/decisions\/credit/);
});