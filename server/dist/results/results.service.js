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
exports.ResultsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ResultsService = class ResultsService {
    constructor(boardModel) {
        this.boardModel = boardModel;
    }
    async createResult(createResultDto) {
        const createdResult = new this.boardModel(createResultDto);
        return await createdResult.save();
    }
    async updateResult(boardId, updateResultDto) {
        const existingResult = await this.boardModel.findByIdAndUpdate(boardId, updateResultDto, {
            new: true
        });
        if (!existingResult) {
            throw new common_1.NotFoundException('Result #${boardId} not found');
        }
        return existingResult;
    }
    async getAllResults() {
        const boardData = await this.boardModel.find();
        if (!boardData || boardData.length == 0) {
            throw new common_1.NotFoundException('Results data not found!');
        }
        return boardData;
    }
    async getResult(boardId) {
        const existingResult = await this.boardModel.findById(boardId).exec();
        if (!existingResult) {
            throw new common_1.NotFoundException('Result #${boardId} not found');
        }
        return existingResult;
    }
    async deleteResult(boardId) {
        const deletedResult = await this.boardModel.findByIdAndDelete(boardId);
        if (!deletedResult) {
            throw new common_1.NotFoundException('Result #${boardId} not found');
        }
        return deletedResult;
    }
};
ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Result')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ResultsService);
exports.ResultsService = ResultsService;
//# sourceMappingURL=results.service.js.map