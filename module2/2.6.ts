{
    // Constraints in TypeScript
        const addCourseToStudent = <T extends {id : number; name : string; email : string}>(student : T) =>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
        id : 1,
        name : 'shawon',
        email : 'shawonk@gmail.com',
        devType : 'NLWD'
    })

    const student2 = addCourseToStudent({
        id : 2,
        name : 'zohaib',
        email : 'zohaib@gmail.com',
        hasWatch : 'apple watch'
    })
        const student3 = addCourseToStudent({ id : 44, 
            name : "vharmonix", 
            email : 'x@gmail.com',
            extra : 'extra'})
    
    
    
    
    
    
    
    
    
    
    //
}