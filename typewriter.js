const sentence = "hello there from lighthouse labs\n";

const printSentence = function() {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, 100 * i);
  }
};

printSentence(sentence);