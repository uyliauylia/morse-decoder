const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const size = 10;
 let arr = [];
 let arrWithoutZero = [];
 let arrDotDash = [];
 let result = "";

 for(let i=0; i< expr.length; i+=size) {
  arr.push(expr.slice(i, size+i));
 }

 arr.map((item) => {
  let index = item.indexOf('1');  
  arrWithoutZero.push(item.slice(index));
 })

 arrWithoutZero.map((item, i) => {
  item = item.replaceAll("10", ".");
  item = item.replaceAll("11", "-");
  arrDotDash.push(item);
 })

for(let i = 0; i < arrDotDash.length; i++) {
  if (arrDotDash[i] in MORSE_TABLE) {
    result+=MORSE_TABLE[arrDotDash[i]];
  } else {
    result+=' ';
  }
}
return result;
}

module.exports = {
    decode
}