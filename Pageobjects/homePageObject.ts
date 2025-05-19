export class homePageObject{    
    static switchDealerBtn : ["link", string] = ["link","Switch Dealership"];
    static searchLink : ["link", string] = ["link","Search"];
    static selectDealerLinkTextLocator(dealerName: string): string {
        return dealerName;
    }
}