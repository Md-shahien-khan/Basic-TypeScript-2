{
    // Function with generics
    
    const createArray = (param : string) : string[] => {
        return[param]
    };


    const createArrayWithGeneric = <T>(param : T) : T[] => {
        return[param]
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('shawon');

    interface User{
        id:number, 
        name: string
    }


    const resGenericObj = createArrayWithGeneric<User>({
        id:212, 
        name: 'kanij'
    });





    const createArrayWithTuple = <T, Q>(param1 : T, param2 : Q) : [T, Q] => {
        return[param1, param2]
    }

    const res3 = createArrayWithTuple<string, number>('Bangladesh', 222);
    const resTuple = createArrayWithTuple<string, {name : string}>('shawon', {name : 'asia'});

    interface User{
        id:number, 
        name: string
    }


    const resGenericObj2 = createArrayWithGeneric<User>({
        id:212, 
        name: 'kanij'
    });






    // more example
    const addCourseToStudent = <T>(student : T) =>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name : 'shawon',
        email : 'shawonk@gmail.com',
        devType : 'NLWD'
    })

     const student2 = addCourseToStudent({
        name : 'zohaib',
        email : 'zohaib@gmail.com',
        hasWatch : 'apple watch'
    })

}