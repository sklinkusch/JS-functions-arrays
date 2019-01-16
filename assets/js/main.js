const stringQuote = "The quick brown fox jumps over the tree.";

const capitalFirstLett = quote => {
  const words = quote.split(" ");
  let WORDS = [];
  let current, beginning, end;
  for (let i = 0; i < words.length; i++) {
    current = words[i];
    beginning = current.charAt(0).toUpperCase();
    end = current.slice(1);
    WORDS.push(`${beginning}${end}`);
  }
  const sentence = WORDS.join(" ");
  return sentence;
};

// console.log(capitalFirstLett(stringQuote));

const capitalFirstLett2 = quote => {
  const words = quote.split(" ");
  const WORDS = words.map(x => {
    return `${x.charAt(0).toUpperCase()}${x.slice(1)}`;
  });
  sentence = WORDS.join(" ");
  return sentence;
};
console.log(capitalFirstLett2(stringQuote));
