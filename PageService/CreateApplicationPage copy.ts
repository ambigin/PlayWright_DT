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
        await this.defaultPage.getByRole(createApplicationPageObject.firstName[0],createApplicationPageObject.firstName[1]).fill(firstName);
        // await this.defaultPage.getById(createApplicationPageObject.firstNameIdLocator).fill(firstName);
        await this.defaultPage.getById(createApplicationPageObject.lastNameIdLocator).fill(lastName);
        await this.defaultPage.getById(createApplicationPageObject.createBtnIdLocator).click();
    }

    async selectVehicleType(vehicle: VehicleTypeEnum){
        await this.defaultPage.getById(vehicle).check();
    }

    async clickNextBtn(){
        await this.defaultPage.getById(createApplicationPageObject.nextBtnIdLocator).click();
    }

    async fillApplicantInfo(ssn:number,dob:string,address:string,zip:string,homePhone:number,email:string){
        await this.defaultPage.getById(createApplicationPageObject.ssnIdLocator).type(ssn.toString());
        await this.defaultPage.getById(createApplicationPageObject.dobIdLocator).type(dob);
        await this.defaultPage.getById(createApplicationPageObject.addressIdLocator).fill(address);
        await this.defaultPage.getById(createApplicationPageObject.zipIdLocator).fill(zip.toString());
        await this.defaultPage.getById(createApplicationPageObject.homePhoneIdLocator).type(homePhone.toString());
        await this.defaultPage.getById(createApplicationPageObject.emailIdLocator).fill(email); 
        const city = await this.defaultPage.getById(createApplicationPageObject.cityIdLocator);
        await expect(city).toBeAttached();
        const firstOptionValue = this.defaultPage.getFirstOptionValueFromDropdown(city);
        await this.defaultPage.selectDropdown(city,await firstOptionValue);
        }

    async fillHousingInfo(housingStatus:housingStatusEnum,yrsAtAddress:number,mthAtAddress:number,rent:number){
        await this.defaultPage.selectDropdown(this.defaultPage.getById(createApplicationPageObject.housingStatusIdLocator),housingStatus)
        await this.defaultPage.getById(createApplicationPageObject.yearsAtAddressIdLocator).fill(yrsAtAddress.toString());
        await this.defaultPage.getById(createApplicationPageObject.monthAtAddressIdLocator).fill(mthAtAddress.toString());
        await this.defaultPage.getById(createApplicationPageObject.rentIdLocator).fill(rent.toString());
    }

    async fillEmploymentInfo(employentStatus:employmentStatusEnum,employer:string,yrs:number,mth:number,businessPhone:number,salary:number,payFrequency:payFrequencyEnum){
        await this.defaultPage.selectDropdown(this.defaultPage.getById(createApplicationPageObject.employentStatusIdLocator),employentStatus);
        await this.defaultPage.getById(createApplicationPageObject.employerIdLocator).fill(employer);
        await this.defaultPage.getById(createApplicationPageObject.yrsAtEmployerIdLocator).fill(yrs.toString());
        await this.defaultPage.getById(createApplicationPageObject.mthAtEmployerIdLocator).fill(mth.toString());
        await this.defaultPage.getById(createApplicationPageObject.businessPhoneIdLocator).type(businessPhone.toString());
        await this.defaultPage.getById(createApplicationPageObject.salaryIdLocator).fill(salary.toString());
        await this.defaultPage.selectDropdown(this.defaultPage.getById(createApplicationPageObject.payFrequencyIdLocator),payFrequency);
    }

    async fillVehicleInfo(vin:string,vehicleValue:number,odometer:number){
        await this.defaultPage.getById(createApplicationPageObject.vinIdLocator).fill(vin);
        await this.defaultPage.getById(createApplicationPageObject.wholeSaleValueIdLocator).fill(vehicleValue.toString());
        await this.defaultPage.getById(createApplicationPageObject.odometerIdLocator).fill(odometer.toString());
    }

    async fillTradeInInfo(year:number, make:string){
        await this.defaultPage.getById(createApplicationPageObject.addTradeInIdLocator).check();
        await this.defaultPage.selectDropdown(this.defaultPage.getByName(createApplicationPageObject.tradeInYearNameLocator),year.toString());
        await this.defaultPage.selectDropdown(this.defaultPage.getByName(createApplicationPageObject.tradeInMakeNameLocator),make);
        const model = this.defaultPage.getByName(createApplicationPageObject.tradeInModelNameLocator);
        const firstModel = this.defaultPage.getFirstOptionValueFromDropdown(model);
        await this.defaultPage.selectDropdown(model,await firstModel);
        const trim = this.defaultPage.getByName(createApplicationPageObject.tradeInTrimNameLocator);
        const firstTrim = this.defaultPage.getFirstOptionValueFromDropdown(trim);
        await this.defaultPage.selectDropdown(model,await firstTrim);
    }

    async fillFinancialInfo(term:number,cashPrice:number,salesTax:number,tAndL:number,downPayment:number,netTrade?:number){
        await this.defaultPage.getById(createApplicationPageObject.termIdLocator).fill(term.toString());
        await this.defaultPage.getById(createApplicationPageObject.cashPriceIdLocator).fill(cashPrice.toString());
        await this.defaultPage.getById(createApplicationPageObject.salesTaxIdLocator).fill(salesTax.toString());
        await this.defaultPage.getById(createApplicationPageObject.tAndLIdLocator).fill(tAndL.toString());
        await this.defaultPage.getById(createApplicationPageObject.downPaymentIdLocator).fill(downPayment.toString());
        if(netTrade!=undefined){
            await this.defaultPage.getById(createApplicationPageObject.netTradeIdLocator).fill(netTrade.toString());
        }
    }

    async clickContinueBtn(){
        await this.defaultPage.getById(createApplicationPageObject.continueBtnIdLocator).click();
    }

    async clickContinueToLender(){
        await this.defaultPage.getById(createApplicationPageObject.continueToLenderIdLocator).click();
    }

    async selectEligibleLender(){
        await this.defaultPage.getByName(createApplicationPageObject.lenderSelectionNameLocator).check();
    }

    async clickSubmitBtn(){
        await this.defaultPage.getByName(createApplicationPageObject.submitBtnNameLocator).click();
    }

}