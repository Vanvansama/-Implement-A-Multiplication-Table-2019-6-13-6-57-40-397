const createMultiplication = require('../createMultiplicationTable');

it('should return a multiplication table given two number',()=>{
    //given
    const startNumber = 2;
    const endNumber = 4;
    //when
    const result = createMultiplication(startNumber,endNumber);
    //then
    expect(result).toBe("2*2=4\t\n2*3=6\t3*3=9\t\n2*4=8\t3*4=12\t4*4=16\t\n")
});

