export default function totalPhoneBill(tarrif){
  var total = 0;
  var splitTarrif = tarrif.split(",");
  var call = 2.75;
  var sms = 0.65;
  
for (var i=0; i<splitTarrif.length; i++) {
  var trimTarrif = splitTarrif[i].trim();
  
  if (trimTarrif.startsWith("call")){
    total += call;
    
  } else if (trimTarrif.startsWith("sms")) {
    total += sms;
  }
}
  return total.toFixed(2);
}