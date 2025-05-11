export class createApplicationPageObject{
    //First page
    static firstName: ['textbox', string] = ['textbox', 'First Name'];
    static lastName: ['textbox', string] = ['textbox', 'Last Name'];
    static createBtn: ['button', string] = ['button', 'Create'];

    //Second page
    static nextBtnIdLocator = "prepage a";
    static nextBtn: ['link', string] = ['link','Next'];


    //Applicant Info
    static ssn: ['textbox', string] = ['textbox', 'SSN #'];
    static dob: ['textbox', string] = ['textbox', 'DOB'];
    static address: ['textbox', string] = ['textbox', 'Address 1'];
    static zip: ['textbox', string] = ['textbox', 'ZIP'];
    static homePhone: ['textbox', string] = ['textbox', 'Home'];
    static email: ['textbox', string] = ['textbox', 'Email'];
    static city: ['combobox', string] = ['combobox', 'City & State'];

    // Address Info
    static housingStatus: ['combobox', string] = ['combobox', 'Housing Status'];
    static yearsAtAddress: ['textbox', string] = ['textbox', 'Yrs. at Address'];
    static monthsAtAddress: ['textbox', string] = ['textbox', 'Mos. at Address'];
    static rent: ['textbox', string] = ['textbox', 'Mort. Payment/Rent'];

    // Employment
    static employmentStatus: ['combobox', string] = ['combobox', 'Employment Status'];
    static employerIdLocator = "id_applicant_form-organization_name";
    static yearsAtEmployer: ['textbox', string] = ['textbox', 'Yrs. at Employer'];
    static monthsAtEmployer: ['textbox', string] = ['textbox', 'Mos. at Employer'];
    static businessPhone: ['textbox', string] = ['textbox', 'Business Phone'];
    static salary: ['textbox', string] = ['textbox', 'Expected Salary'];
    static payFrequency: ['combobox', string] = ['combobox', 'Pay Frequency'];

    // Vehicle Info
    static vin: ['textbox', string] = ['textbox', 'VIN'];
    static wholesaleValue: ['textbox', string] = ['textbox', 'Wholesale Value'];
    static odometer: ['textbox', string] = ['textbox', 'Odometer'];

    // Trade-in
    static addTradeIn: ['radio', string] = ['radio', 'Yes'];
    static tradeInYear: ['combobox', string] = ['combobox', 'Year'];
    static tradeInMake: ['combobox', string] = ['combobox', 'Make'];
    static tradeInModel: ['combobox', string] = ['combobox', 'Model'];
    static tradeInTrim: ['combobox', string] = ['combobox', 'Trim'];

    // Financial Info
    static term: ['textbox', string] = ['textbox', 'Term'];
    static cashPrice: ['textbox', string] = ['textbox', 'Cash Selling Price'];
    static salesTax: ['textbox', string] = ['textbox', 'Sales Tax'];
    static titleAndLicense: ['textbox', string] = ['textbox', 'T&L (estimate)'];
    static downPayment: ['textbox', string] = ['textbox', 'Cash Down'];
    static netTrade: ['textbox', string] = ['textbox', 'Net Trade'];

    // Buttons
    static continueBtnIdLocator = "one-page-v4-form button";
    static continueToLender: ['button', string] = ['button', 'Continue to Lenders'];
    static submitBtn: ['button', string] = ['button', 'Submit'];

    // Lender selection
    static lenderSelection: ['checkbox', string] = ['checkbox', 'First Help Financial'];


    

}