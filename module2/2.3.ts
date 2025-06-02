{

    // Generics Type

    // type GenericArray = Array<number>  //if we put number inside the bracket it will work for
    // number array if we do for string it will work for string array.

    // now if we put parameter inside
    // type GenericArray<param> = Array<param>

    // for the industry standard will write T instead of param
    type GenericArray<T> = Array<T>
    
    // const rollNumbers : number[] = [3, 6, 8];
    // const rollNumber : Array<number> = [3, 6, 2];
    const rollNumber : GenericArray<number> = [3, 6, 2];


    
    // const mnetors : string[] = ['Mr x', 'shawon', 'badhon'];
    // const mentors : Array<string> = ['kanij', 'fatema', 'vabna'];
    const mentors : GenericArray<string> = ['kanij', 'fatema', 'vabna'];
    // We doing reuseable by adding the GenericArray. 

    const booleanArray : Array<boolean> = [true, false, true];

    const user : GenericArray<{name : string, age : number}> = [
        {
            name : 'Mezba',
            age : 100
        },
        {
            name : 'JH',
            age : 110
        }
    ]

    const add = (x : number, y : number) => x + y
    add(30, 20);

    // Generic Tuple

    type GenericTuple<X,Y> = [X,Y]; 

    // const Human : [string, string] = ['family', 'business'];
    // let's make it generic tuple
    const Human : GenericTuple<string, string> = ['family', 'business'];
    // another one
    const UserWithID : GenericTuple<number, {name: string, email : string}> = [131, {name : 'kanij', email : 'a@gmail.com'}]
}