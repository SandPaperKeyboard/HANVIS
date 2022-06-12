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
exports.ResultsController = void 0;
const common_1 = require("@nestjs/common");
const boards_dto_1 = require("./dto/boards.dto");
const results_service_1 = require("./results.service");
let ResultsController = class ResultsController {
    constructor(ResultService) {
        this.ResultService = ResultService;
    }
    async createResult(response, createResultDto) {
        try {
            const newResult = await this.ResultService.createResult(createResultDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Result has been created successfully', newResult,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Result not created!',
                error: 'Bad Request!!'
            });
        }
    }
    async updateResult(response, ResultId, updateResultDto) {
        try {
            const existingResult = await this.ResultService.updateResult(ResultId, updateResultDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Result has been successfully updated',
                existingResult,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getResults(response) {
        try {
            const ResultData = await this.ResultService.getAllResults();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All Results data found successfully', ResultData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getResult(response, ResultId) {
        try {
            const existingResult = await this.ResultService.getResult(ResultId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Result found successfully', existingResult,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteResult(response, ResultId) {
        try {
            const deletedResult = await this.ResultService.deleteResult(ResultId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Result deleted successfully',
                deletedResult,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, boards_dto_1.CreateResultDto]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "createResult", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, boards_dto_1.UpdateResultDto]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "updateResult", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "getResults", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "getResult", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "deleteResult", null);
ResultsController = __decorate([
    (0, common_1.Controller)('results'),
    __metadata("design:paramtypes", [results_service_1.ResultsService])
], ResultsController);
exports.ResultsController = ResultsController;
//# sourceMappingURL=results.controller.js.map