const isNumberValid = require('../isNumberValid');

it ('should return is valid given two number', () => {
    //given
    const startNum = 2;
    const endNum = 4;
    //when
    const result = isNumberValid(startNum,endNum);
    //then
    expect(result).toBe(true);
});