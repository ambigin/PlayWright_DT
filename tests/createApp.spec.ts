import { test } from '@playwright/test';
import { CreateApplicationPage } from '../PageService/CreateApplicationPage';
import { VehicleTypeEnum } from '../Enum/vehicleTypeEnum';
import { housingStatusEnum } from '../Enum/HousingStatusEnum';
import { employmentStatusEnum } from '../Enum/employmentStatusEnum';
import { payFrequencyEnum } from '../Enum/payFrequencyEnum';
import { pageUrlEnum } from '../Enum/pageUrlEnum';
const applicantInfo = require('../Testdata/Applicant/700pa.json')
const collateralInfo = require('../Testdata/Collateral/NS.json');

const ApplicantData = {
    firstName: applicantInfo.firstName,
    lastName: applicantInfo.lastName,
    vehicleType: VehicleTypeEnum.Used,
    ssn: applicantInfo.SSN,
    dob: applicantInfo.dateOfBirth,
    address: applicantInfo.address,
    zip: applicantInfo.postalCode,
    phone: 5041235698,
    email: "test@gmail.com",
    housing: {
        status: housingStatusEnum.Family,
        years: 4,
        months: 4,
        rent: 1200,
    },
    employment: {
        status: employmentStatusEnum.Employed,
        employer: "test",
        years: 4,
        months: 3,
        phone: 3125431321,
        income: 10000,
        frequency: payFrequencyEnum.Monthly,
    },
    vehicle: {
        vin: collateralInfo.vin,
        price: collateralInfo.totalCashPrice,
        mileage: collateralInfo.mileage,
    },
    financial: {
        term: 66,
        cashPrice: collateralInfo.totalCashPrice,
        salesTax: 200,
        tAndL: 0,
        downPayment: collateralInfo.downPayment,
    },
};

test("Create app", async ({ page }) => {
    await page.goto(pageUrlEnum.CreateApplication);
    const createApplicationPage = new CreateApplicationPage(page);
    await createApplicationPage.FirstAndLastName(ApplicantData.firstName, ApplicantData.lastName);
    await createApplicationPage.selectVehicleType(ApplicantData.vehicleType);
    await createApplicationPage.clickNextBtn();
    await createApplicationPage.fillApplicantInfo(ApplicantData.ssn, ApplicantData.dob, ApplicantData.address, ApplicantData.zip, ApplicantData.phone, ApplicantData.email);
    await createApplicationPage.fillHousingInfo(ApplicantData.housing.status,ApplicantData.housing.years,ApplicantData.housing.months,ApplicantData.housing.rent);
    await createApplicationPage.fillEmploymentInfo(ApplicantData.employment.status, ApplicantData.employment.employer,ApplicantData.employment.years,ApplicantData.employment.months, ApplicantData.employment.phone,ApplicantData.employment.income, ApplicantData.employment.frequency);
    await createApplicationPage.fillVehicleInfo(ApplicantData.vehicle.vin,ApplicantData.vehicle.price,ApplicantData.vehicle.mileage)
    await createApplicationPage.fillFinancialInfo(ApplicantData.financial.term, ApplicantData.financial.cashPrice, ApplicantData.financial.salesTax,ApplicantData.financial.tAndL, ApplicantData.financial.downPayment);
    await createApplicationPage.clickContinueBtn();
    await createApplicationPage.clickContinueToLender();
    await createApplicationPage.selectEligibleLender();
    await createApplicationPage.clickSubmitBtn();
});
