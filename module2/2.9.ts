{
    // conditinal types

    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false // conditonal types

    type y = a1 extends null ? true : false

    // nested
    type yz= a1 extends null? true : b1 extends undefined ? undefined : any;

    type richManHas = {
        bike : string;
        car : string;
        ship : string;
        plane : string;
    }

    // if we use key of richmanhas it will give me bike car and ship
    
    type checkVehicle<T> = T extends keyof richManHas ? true : false;
    type hasTractor = checkVehicle<"Tractor">

    // 
}