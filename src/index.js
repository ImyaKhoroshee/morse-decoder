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
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    let arrOfSymbols = [];

    for (var i = 0; i < expr.length; i+=10) {
        arrOfSymbols.push(expr.slice(i, i + 10));
    }
    return arrOfSymbols
        .map(elem => elem.replace(/^0+/, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-'))
        .map(element => MORSE_TABLE[element])
        .join('');
}

module.exports = {
    decode
}