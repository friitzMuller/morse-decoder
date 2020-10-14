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

function decode(str) {
    let myArr;
    let a = []
    let b = []
    let c = []
    let newStr = []
    let f = ''

    myArr =  str.match(/.{1,10}/g)

    for (let i = 0; i <myArr.length; i ++) {
      a.push(myArr[i].match(/.{1,2}/g))
    }

    for (let j = 0; j <a.length; j ++) {
      for (let k = 0; k <a[j].length;  k++) {

      if(a[j][k] == '10' && a[j][k] !=='00' ){
             c.push('.')
              }else if( a[j][k]=='11' && a[j][k] !=='00' ){
               c.push('-')
          }
            }
            if(MORSE_TABLE[c.join('')] !== undefined){
                f+=MORSE_TABLE[c.join('')]
                c=[]
              }else{
                  f+= ' '
              }
        }

          return f
}

module.exports = {
    decode
}