

export class PaymentSystem{

    public pageTitle: string;
    constructor(pageTitle:string){
      this.pageTitle = pageTitle;
    }
    public showPageTitle():void{
      console.log(this.pageTitle);
    }
    public getPageTitle(): string{
      return this.pageTitle;
    }
}

let paymentSystemObj = new PaymentSystem("Stripe");
paymentSystemObj.showPageTitle();
