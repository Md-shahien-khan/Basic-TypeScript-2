{
    // generic constraint with using key of operator

    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    // write manually
    type Owner = "bike" | "" | "car" | "ship";

    type Owner2 = keyof Vehicle // key of will take the keys from vehicle and add here like bike, car, ship are the key

    const getPropertyValue = <X, Y extends keyof X>(obj : X, key: Y)=>{
        return obj[key]
    }
    const user = {
        name : 'Sadman',
        age : 26,
        address : 'dhaka'
    };
        const car = {
        model : 'toyota',
        year : 2026,
        // address : 'dhaka'
    };

    // const result1 = getPropertyValue(user, "emni");
    const result1 = getPropertyValue(car, "model");




    // 
}