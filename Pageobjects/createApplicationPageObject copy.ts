export class createApplicationPageObject{
    //First page
    static firstNameIdLocator = "id_first_name-maskedInput";
    static firstName: ['textbox', string] = ['textbox', 'First Name *'];
    static lastNameIdLocator = "id_last_name-maskedInput";
    static createBtnIdLocator = "deal-creator-search";

    //Second page
    static nextBtnIdLocator = "prepage a";

    //Applicant Info
    static ssnIdLocator = "id_applicant_form-tax_id";
    static dobIdLocator = "id_applicant_form-birth_date";
    static addressIdLocator = "id_applicant_form-line_1_address";
    static zipIdLocator = "id_applicant_form-zip_code";
    static homePhoneIdLocator = "id_applicant_form-primary_phone_number";
    static emailIdLocator = "id_applicant_form-email_address";
    static cityIdLocator = "id_applicant_form-city_state_dropdown"

    // Housing
    static housingStatusIdLocator = "id_applicant_form-housing_status_code";
    static yearsAtAddressIdLocator = "id_applicant_form-current_address_years";
    static monthAtAddressIdLocator = "id_applicant_form-current_address_months";
    static rentIdLocator = "id_applicant_form-mortgage_payment_or_rent";
    
    //Employment
    static employentStatusIdLocator = "id_applicant_form-employment_status_code";
    static employerIdLocator = "id_applicant_form-organization_name";
    static yrsAtEmployerIdLocator = "id_applicant_form-current_employed_years";
    static mthAtEmployerIdLocator = "id_applicant_form-current_employed_months";
    static businessPhoneIdLocator = "id_applicant_form-work_phone_number";
    static salaryIdLocator = "id_applicant_form-salary";
    static payFrequencyIdLocator = "id_applicant_form-salary_type_code";

    //Vehicle Info
    static vinIdLocator = "id_vehicle_form-vin_number";
    static wholeSaleValueIdLocator = "id_vehicle_form-wholesale_amount";
    static odometerIdLocator = "id_vehicle_form-odometer_number";

    //Trade-in
    static addTradeInIdLocator = "id_vehicle_form-trade_in_1";
    static tradeInYearNameLocator = 'vehicle_form-trade_in_vehicle_year_id';
    static tradeInMakeNameLocator = 'vehicle_form-trade_in_vehicle_model_id';
    static tradeInModelNameLocator = 'vehicle_form-trade_in_vehicle_model_id';
    static tradeInTrimNameLocator = "vehicle_form-trade_in_vehicle_trim_id";

    //Financial Info
    static termIdLocator = "id_vehicle_form-term_count";
    static cashPriceIdLocator = "id_vehicle_form-cash_sell_price_amount";
    static salesTaxIdLocator = "id_vehicle_form-sales_tax_amount";
    static tAndLIdLocator = "id_vehicle_form-title_and_license_amount";
    static downPaymentIdLocator = "id_vehicle_form-cash_down_amount";
    static netTradeIdLocator = "id_vehicle_form-trade_in_value_amount";

    //Create application
    static continueBtnIdLocator = "one-page-v4-form button";

    // Confirm address modal
    static continueToLenderIdLocator = "address_parser_modal button";

    //Select lender
    static lenderSelectionNameLocator = "lenders";
    static submitBtnNameLocator = "_finish_";

    

}