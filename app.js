import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { user } from './controler/user.js';

let json = {
    id: "1",
    name: "Angel",
    age: 20
}

let data = plainToClass(user, json, { excludeExtraneousValues: true });
console.log(data.getAll);