import { Page,expect } from '@playwright/test';
import { createApplicationPageObject } from '../Pageobjects/createApplicationPageObject';
import { DefaultPage } from './DefaultPage';
import { VehicleTypeEnum } from '../Enum/vehicleTypeEnum';
import { housingStatusEnum } from '../Enum/HousingStatusEnum';
import { employmentStatusEnum } from '../Enum/employmentStatusEnum';
import { payFrequencyEnum } from '../Enum/payFrequencyEnum';

export class CreateApplicationPage{
    private page: Page;
    private defaultPage: DefaultPage;


    constructor(page: Page){
        this.page = page;
        this.defaultPage = new DefaultPage(page); 
    }

    async FirstAndLastName(firstName:string,lastName:string){
        await this.defaultPage.getByRole(...createApplicationPageObject.firstName).fill(firstName);
        await this.defaultPage.getByRole(...createApplicationPageObject.lastName).fill(lastName);
        await this.defaultPage.getByRole(...createApplicationPageObject.createBtn).click();
    }

    async MiddleName(){
        await this.defaultPage.getByRole(...createApplicationPageObject.middleName).fill("A");
    }

    async selectVehicleType(vehicle: VehicleTypeEnum){
        const [role,label] = vehicle.split(',');
        await this.defaultPage.getByRole(role as 'radio',label).check();
    }

    async clickNextBtn(){
        await this.defaultPage.getByRole(...createApplicationPageObject.nextBtn).click();
    }

    async fillApplicantInfo(ssn:number,dob:string,address:string,zip:string,homePhone:number,email:string){
        await this.defaultPage.getByRole(...createApplicationPageObject.ssn).type(ssn.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.dob).type(dob);
        await this.defaultPage.getByRole(...createApplicationPageObject.address).fill(address);
        await this.defaultPage.getByRole(...createApplicationPageObject.zip).fill(zip.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.homePhone).type(homePhone.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.email).fill(email);
        const city = await this.defaultPage.getByRole(...createApplicationPageObject.city);
        await expect(city).toBeAttached();
        const firstOptionValue = this.defaultPage.getFirstOptionValueFromDropdown(city);
        await this.defaultPage.selectDropdown(city,await firstOptionValue);
        }

    async fillHousingInfo(housingStatus:housingStatusEnum,yrsAtAddress:number,mthAtAddress:number,rent:number){
        await this.defaultPage.selectDropdown(this.defaultPage.getByRole(...createApplicationPageObject.housingStatus),housingStatus)
        await this.defaultPage.getByRole(...createApplicationPageObject.yearsAtAddress).fill(yrsAtAddress.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.monthsAtAddress).fill(mthAtAddress.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.rent).fill(rent.toString());
    }

    async fillEmploymentInfo(employentStatus:employmentStatusEnum,employer:string,yrs:number,mth:number,businessPhone:number,salary:number,payFrequency:payFrequencyEnum){
        await this.defaultPage.selectDropdown(this.defaultPage.getByRole(...createApplicationPageObject.employmentStatus),employentStatus);
        await this.defaultPage.getById(createApplicationPageObject.employerIdLocator).fill(employer);
        await this.defaultPage.getByRole(...createApplicationPageObject.yearsAtEmployer).fill(yrs.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.monthsAtEmployer).fill(mth.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.businessPhone).type(businessPhone.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.salary).fill(salary.toString());
        await this.defaultPage.selectDropdown(this.defaultPage.getByRole(...createApplicationPageObject.payFrequency),payFrequency);
    }

    async fillVehicleInfo(vin:string,vehicleValue:number,odometer:number){
        await this.defaultPage.getByRole(...createApplicationPageObject.vin).fill(vin);
        await this.defaultPage.getByRole(...createApplicationPageObject.wholesaleValue).fill(vehicleValue.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.odometer).fill(odometer.toString());
    }

    async fillTradeInInfo(year:number, make:string){
        await this.defaultPage.getByRole(...createApplicationPageObject.addTradeIn).check();
        await this.defaultPage.selectDropdown(this.defaultPage.getByRole(...createApplicationPageObject.tradeInYear),year.toString());
        await this.defaultPage.selectDropdown(this.defaultPage.getByRole(...createApplicationPageObject.tradeInMake),make);
        const model = this.defaultPage.getByRole(...createApplicationPageObject.tradeInModel);
        const firstModel = this.defaultPage.getFirstOptionValueFromDropdown(model);
        await this.defaultPage.selectDropdown(model,await firstModel);
        const trim = this.defaultPage.getByRole(...createApplicationPageObject.tradeInTrim);
        const firstTrim = this.defaultPage.getFirstOptionValueFromDropdown(trim);
        await this.defaultPage.selectDropdown(model,await firstTrim);
    }

    async fillFinancialInfo(term:number,cashPrice:number,salesTax:number,tAndL:number,downPayment:number,netTrade?:number){
        await this.defaultPage.getByRole(...createApplicationPageObject.term).fill(term.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.cashPrice).fill(cashPrice.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.salesTax).fill(salesTax.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.titleAndLicense).fill(tAndL.toString());
        await this.defaultPage.getByRole(...createApplicationPageObject.downPayment).fill(downPayment.toString());
        if(netTrade!=undefined){
            await this.defaultPage.getByRole(...createApplicationPageObject.netTrade).fill(netTrade.toString());
        }
    }

    async clickContinueBtn(){
        await this.defaultPage.getById(createApplicationPageObject.continueBtnIdLocator).click();
    }

    async clickContinueToLender(){
        await this.defaultPage.getByRole(...createApplicationPageObject.continueToLender).click();
    }

    async selectEligibleLender(){
        await this.defaultPage.getByRole(...createApplicationPageObject.lenderSelection).check();
    }

    async clickSubmitBtn(){
        await this.defaultPage.getByRole(...createApplicationPageObject.submitBtn).click();
    }

}