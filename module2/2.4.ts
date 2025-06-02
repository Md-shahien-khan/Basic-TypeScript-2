{
    // Generic With Interface
    interface Developer<T , X = null> {
        name : string,
        device : {
            brand : string;
            model : string;
            releaseYear : number
        }
        smartWatch : T;
        bike? : X
    }

    // for more cleaner code 
    // we can declare a type for the watch
    type MyWatch = {
        brand : string;
        model : string;
        display : string
    }
    const poorDeveloper : Developer<MyWatch> = {
        name : 'persian',
        device : {
            brand : 'Samsung',
            model : 'X-342',
            releaseYear : 2013
        },
        smartWatch : {
            brand : 'Apple',
            model : 'x',
            display : 'Wide ultra'
        }
    }

    // const richDeveloper : Developer<{
    //     brand : string;
    //     model : string;
    //     heartTrack : boolean;
    //     sleepTrack : boolean;
    // }> = {
    //     name : 'Kanij',
    //     device : {
    //         brand : 'Apple',
    //         model : 'Mac-book',
    //         releaseYear : 2024
    //     },
    //     smartWatch : {
    //         brand : 'Apple',
    //         model : 'ninth',
    //         display : 'Wide',
    //         heartTrack : true,
    //         sleepTrack : true
    //     }
    // }


    // My watch 2 by using interface
    interface MyWatch2 
    {
        brand : string;
        model : string;
        heartTrack : boolean;
        display : string
        sleepTrack : boolean;
    },
    interface Bike {
        brand : string;
        engineCapacity : string
    }
     

    const richDeveloper : Developer<MyWatch2, Bike> = {
        name : 'Kanij',
        device : {
            brand : 'Apple',
            model : 'Mac-book',
            releaseYear : 2024
        },
        smartWatch : {
            brand : 'Apple',
            model : 'ninth',
            display : 'Wide',
            heartTrack : true,
            sleepTrack : true
        },
        bike : {
            brand : 'Yamaha',
            engineCapacity : '100cc'
        }
    }
}