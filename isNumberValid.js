function isNumberValid (startNumber, endNumber) {
    if (startNumber <= endNumber && startNumber >= 0 && endNumber <= 1000) {
        return true;
    }else {
        return null;
    }
}

module.exports = isNumberValid;