import {sum} from "./01";

test('sum should be correct', () =>{
    //data
    const a= 1;
    const b= 2;
    const c= 3;

    //action
    const result = sum(a,b);


    //expect result
expect(result).toBe(3)
})
