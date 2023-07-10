import {Expose, Type, Transform} from "class-transformer";

export class user {
    //? Solo numeros
    //? El alias del frontend, para agregar seguridad
    @Expose({name: "id"})
    @Transform(({ value } ) => parseInt(value), {toClassOnly: true})
    id: string

    //? Solo tipo string
    @Expose({name: "name"})
    @Type(() => String)
    name: string
    
    @Expose({name: "age"})
    @Transform(({ value } ) => parseInt(value), {toClassOnly: true})
    age: string
    //? Aca van los parametros que usara la db, los campos deben coincidir con las columnas del DB
    constructor(ID: string, all_name: string, age: string) {
        this.id = ID;
        this.name = all_name;
        this.age = age;
    }
    get getAll() {
        return  `${this.id} - ${this.name} - ${this.age}`; 
    }
}
