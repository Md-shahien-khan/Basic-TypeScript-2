{
//     // interface

//     type User1 = {
//         name : string;
//         age : number;
//     };

//     const user1 : UserWithRole1 = {  // u can use user1, and also User2 interface.
//         name : 'Persian',
//         age : 1000,
//         role : 'SE'
//     };

//     // interface
//     interface User2 { 
//         name : string;
//         age : number;
//     };

//     type UserWithRole1 = User1 & {role : string}

//     interface UserWithRole2 extends User2 {
//         role : string;
//         address : string;
//     }
//     const user3 : UserWithRole2 = {
//         name : 'Shaown',
//         age : 50,
//         role : 'developer',
//         address : 'dhaka'
//     };
//     // for object declaration we can do type alias and also interface.
//     // for all primitive data u can use type alias and for object u can use both alias and interface.

//     // for array
//     type Roll1 = number[];

//     interface Roll2 { 
//         [indexedDB : number] : number
//     }

//     const rollNumber1 : Roll2 = [1, 2, 3] // 0 index is 1 and 1 index is 2.

//     // function

//     type Add1 = (number1 : number, number2 : number) => number
//     // for interface
//     interface Add2{
//         (number1 : number, number2 : number) : number
//     }

//     const add : Add2 = (number1, number2) => number1 + number2







    // interface

    type User1 = {
        name : string;
        age : number;
    };

    type rollNumber = number;


    // let's extend 
    type UserWithRole1 = User1 & {role : string}
    // by using interface
    interface UserWithRole2 extends User1{
        role : string;
    }

    const user1 : UserWithRole2 = {
        name  : "shawon",
        age : 100, 
        role : 'manager'
    };

    interface User2 { 
        name : string;
        age : number;
    }
    // in interface u can not define primitive; for all the primitive we can use type but interface we can not.

     


    // array  

    type Roll1 = number[];

    interface Roll2 {
        [index : number] : number
    }
    const rollNumber1 : Roll2 = [1,2,3];



    // function

    type Add = (num1 : number, num2 : number) => number

    interface Add2{
        (num1 : number, num2 : number) : number
    }

    const add = (num1 : number, num2 : number) => num1 + num2;
    // const number = add(23, 43)
    




    // 
}