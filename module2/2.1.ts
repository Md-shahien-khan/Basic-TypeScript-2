{
// //

// // Type Assertion
// // In TypeScript, type assertion is a way to tell the compiler what the type of a value is, when you (the developer) have more information about the value's type than TypeScript can infer on its own.
// // It's like saying: "Trust me, I know what I'm doing.
// //


//  angle bracket system
let someValue: any = "Hello TypeScript";
let strLength: number = (<string>someValue).length;

let anything : any;

anything = 'Next level web development';

// as system
anything = 222;
// (anything as number).     // if i press. it will show me things for number.


const kgToGm = (value : string | number) : string | number | undefined =>{
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value) * 1000;
        return `The Converted Value is ${convertedValue}`;
    }
    if(typeof value === 'number'){
        return value * 1000
    };


    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm('1000') as string;



    type CustomError = {
        message : string
    }
    try{

    }
    catch(error){
        console.log((error as CustomError).message)
    }
}

}