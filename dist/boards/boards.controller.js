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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const boards_service_1 = require("./boards.service");
const boards_dto_1 = require("./dto/boards.dto");
let BoardsController = class BoardsController {
    constructor(BoardService) {
        this.BoardService = BoardService;
    }
    async createBoard(response, createBoardDto) {
        try {
            const newBoard = await this.BoardService.createBoard(createBoardDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Board has been created successfully', newBoard,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Board not created!',
                error: 'Bad Request!!'
            });
        }
    }
    async updateBoard(response, BoardId, updateBoardDto) {
        try {
            const existingBoard = await this.BoardService.updateBoard(BoardId, updateBoardDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Board has been successfully updated',
                existingBoard,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getBoards(response) {
        try {
            const BoardData = await this.BoardService.getAllBoards();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All Boards data found successfully', BoardData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getBoard(response, BoardId) {
        try {
            const existingBoard = await this.BoardService.getBoard(BoardId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Board found successfully', existingBoard,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteBoard(response, BoardId) {
        try {
            const deletedBoard = await this.BoardService.deleteBoard(BoardId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Board deleted successfully',
                deletedBoard,
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
    __metadata("design:paramtypes", [Object, boards_dto_1.CreateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createBoard", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, boards_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "updateBoard", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getBoards", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getBoard", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "deleteBoard", null);
BoardsController = __decorate([
    (0, common_1.Controller)('boards'),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map