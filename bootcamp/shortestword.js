export default function shortestWord(x){
    var wordSentS = x.split(" ");
      var shortWord = wordSentS[0];
      
      for (var i = 0; i < wordSentS.length ; i++){
      var wordsS = wordSentS[i];
        console.log(wordsS);
        if (wordsS.length <= shortWord.length){
        shortWord = wordsS;
        }
      }
    return shortWord;
    }