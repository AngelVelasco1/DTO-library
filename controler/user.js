var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from "class-transformer";
export class user {
    //? Aca van los parametros que usara la db, los campos deben coincidir con las columnas del DB
    constructor(ID, all_name, age) {
        this.ID = ID;
        this.all_name = all_name;
        this.age = age;
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "ID", void 0);
__decorate([
    Expose({ name: "name" }),
    Type(() => String),
    __metadata("design:type", String)
], user.prototype, "all_name", void 0);
__decorate([
    Expose({ name: "age" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "age", void 0);
let name = "Hola mi amor";
//# sourceMappingURL=user.js.map