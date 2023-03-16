"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PersonService = class PersonService {
    constructor(personModel) {
        this.personModel = personModel;
    }
    async create(createPersonDto) {
        try {
            const responseSave = await this.personModel.create(createPersonDto);
            return responseSave;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.toString());
        }
    }
    async findAll() {
        return await this.personModel.find();
    }
    async findOne(id) {
        return await this.personModel.findById(id);
    }
    async update(id, updatePersonDto) {
        try {
            console.log(updatePersonDto);
            const responseUpdate = await this.personModel.findOneAndUpdate({ "_id": id }, updatePersonDto);
            if (!responseUpdate)
                throw new common_1.BadRequestException("No record found");
            return await this.personModel.findById(id);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error.toString());
        }
    }
    async remove(id) {
        try {
            const responseUpdate = await this.personModel.findByIdAndDelete(id);
            if (!responseUpdate)
                throw new common_1.BadRequestException("No record found");
            return responseUpdate;
        }
        catch (error) {
        }
    }
};
PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Persons')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map