export default function longestWord(x){
    var wordSentL =x.split(" ");
      var longWord = 0;
      
      for (var i = 0; i < wordSentL.length ; i++){
      if (wordSentL[i].length >= longWord){
      longWord = wordSentL[i].length;
        var word = wordSentL[i];
      }
      }
      return word; 
    }