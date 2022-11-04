export default function wordLengths(x){
    var wdL = x.split(" ");
      var wordLength = wdL.map(c => c.length);
      let total = 0;
      for (var i = 0; i < wordLength.length; i ++){
      total += wordLength[i]
      }
    return total;
    }