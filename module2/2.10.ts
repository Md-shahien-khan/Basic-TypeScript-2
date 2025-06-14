{
    // Mapped Types

    const arrOfNumbers : number[] = [1, 4, 6];
    const arrOfString : string[] = arrOfNumbers.map(num => num.toString());
    console.log(arrOfString);


    type AreaNumber = {
        height : number;
        width : number;
    };

    // by using mapped on area number will make it string
    // in a hard code style lets make it
    // type AreaString = {
        // will take index
        // [key in "height" | "width"] : string;

        // next level way
        // [Key in keyof AreaNumber] : string;
    // };

    // with generics
    type AreaString<T> = {
        [Key in keyof T] : T[Key]
    };

    const area1 : AreaString<{height : string, width : number}> = {
        height : "100",
        width : 50
    }



    // object look up type
    type Height = AreaNumber["height"]





    // 
}