const LIMIT = 9;

function encodeString(str){
    
    console.log(str);

    let counter = 1;
    let strAux = str[0];
    let strResult = '';
    
    for ( i=1; i <= str.length; i++ ){
        if (str[i-1] === str[i] && counter < LIMIT ) {
            counter++;
        } else {
            strResult += counter + str[i-1];
            counter = 1;
            strAux = str[i];
        }
    } 
    return strResult;
}



console.log(encodeString('AAAAAAAAAAAAABBCCCCDD'));
console.log(encodeString('aA'));
console.log(encodeString('122333'));