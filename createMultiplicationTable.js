const isNumberValid = require('./isNumberValid');

function createMultiplication(startNumber,endNumber) {
    var result = '';
    if (isNumberValid(startNumber,endNumber)) {
        for (let i = startNumber; i < endNumber+1; i++) {
            for (let j = startNumber; j <= i; j++) {
                result += j+'*'+i+"="+i*j+"\t";
            }
            result+="\n";
        }
        return result;
    }
    return null;
}

module.exports = createMultiplication;