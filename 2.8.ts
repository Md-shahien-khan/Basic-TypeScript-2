{
    // Asyncronus Ts promise
    // const createPromise = () =>{
    const createPromise = () : Promise<string> =>{
        // return new Promise((resolve, reject) =>{
        return new Promise<string>((resolve, reject) =>{
            const data : string = "something";
            if(data){
                // if there is data then resolve otherwise reject
                resolve(data);
            }
            else{
                reject('Failed to load the data');
            }
        })
    }

    // calling the createPromise funtion
    const shwoingData = async() : Promise<string> =>{
        const data : string = await createPromise();
        return data;
        // console.log(data);
    }
    shwoingData();

    // fetching data
    type Todo = {
        id : number;
        userId : number;
        title : string;
        completed : boolean
    }

    const getTodo = async () : Promise<Todo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        return data;
        // console.log(data);
    }
    getTodo();



}