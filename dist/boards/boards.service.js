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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BoardsService = class BoardsService {
    constructor(boardModel) {
        this.boardModel = boardModel;
    }
    async createBoard(createBoardDto) {
        const createdBoard = new this.boardModel(createBoardDto);
        return await createdBoard.save();
    }
    async updateBoard(boardId, updateBoardDto) {
        const existingBoard = await this.boardModel.findByIdAndUpdate(boardId, updateBoardDto, {
            new: true
        });
        if (!existingBoard) {
            throw new common_1.NotFoundException('Board #${userId} not found');
        }
        return existingBoard;
    }
    async getAllBoards() {
        const boardData = await this.boardModel.find();
        if (!boardData || boardData.length == 0) {
            throw new common_1.NotFoundException('Boards data not found!');
        }
        return boardData;
    }
    async getBoard(boardId) {
        const existingBoard = await this.boardModel.findById(boardId).exec();
        if (!existingBoard) {
            throw new common_1.NotFoundException('Board #${boardId} not found');
        }
        return existingBoard;
    }
    async deleteBoard(boardId) {
        const deletedBoard = await this.boardModel.findByIdAndDelete(boardId);
        if (!deletedBoard) {
            throw new common_1.NotFoundException('Board #${boardId} not found');
        }
        return deletedBoard;
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Board')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map