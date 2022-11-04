export default function enoughAirtime(phoneBill, X){
    const Bill = phoneBill.split(",");
    let call = 1.88; 
    let sms = 0.75;
    let data = 12;
    var totalBill = 0;
      
      for(var i = 0; i < Bill.length; i++){
      let BillList = Bill[i].trim();
        
        if (BillList === "call"){
        totalBill = totalBill + call;
        } else if(BillList === "sms"){
        totalBill = totalBill + sms;
        }else{
        totalBill = totalBill + data;
        }
      }
      
      let allBills = X - totalBill;
      if ( X > totalBill){
      return allBills.toFixed(2);
      }else{
       return "0.00";
      }
    }