{
    // Utility Types

    // Pick 
    type Person = {
        name : string;
        age : number;
        email?: string;
        contactNo : string;
    }

    type IWillTakeNameAgeFromPersonByUsingPickType = Pick<Person, "name" | "age">;
    // This pick will pick name and age from person and make a new one.



    // Omit type, means delete those that u dont want like name and age
    type ContactInfo = Omit<Person, "name" | "age">


    // Required type, means u need everything from person.
    type PersonRequire = Required<Person>


    // partial type , will make everything partial 
    type PersonPartial = Partial<Person>;


    // Read only
    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly = {
        name : "Khan",
        age : 28,
        contactNo : "073826211123"
    };

    // person1.name = "Shawon"  // u cant change because its read only


    // Record Type

    type MyObj = Record<string, string>

    const EmptyObj : Record<string, unknown> = {} // string will come as the object key, value can be number or string so we add unknown

    const obj1 : MyObj = {
        a : 'aa',
        b : 'bb',
        c : 'cc'
    }

    // more example
    type Role = "admin" | "user" | "guest";

    type RolePermissions = Record<Role, boolean>;

    // {
    // admin: boolean;
    // user: boolean;
    // guest: boolean;
    // }





    // 
}