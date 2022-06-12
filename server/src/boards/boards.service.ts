/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBoardDto, UpdateBoardDto } from './dto/boards.dto';
import { IBoard } from './interface/boards.interface';
import { Board } from './schema/boards.schema';

@Injectable()
export class BoardsService {
    constructor(@InjectModel('Board') private readonly boardModel: Model<Board>) {}

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        const createdBoard = new this.boardModel(createBoardDto);
        return await createdBoard.save();
    }

    async updateBoard(boardId: string, updateBoardDto: UpdateBoardDto) : Promise<IBoard> {
        const existingBoard = await this.boardModel.findByIdAndUpdate(boardId, updateBoardDto, {
            new: true
        });

        if (!existingBoard) {
            throw new NotFoundException('Board #${userId} not found');
        }
        return existingBoard;
    }

    async getAllBoards() : Promise<IBoard[]> {
        const boardData = await this.boardModel.find();

        if (!boardData || boardData.length == 0) {
            throw new NotFoundException('Boards data not found!');
        }
        return boardData;
    }

    async getBoard(boardId: string) : Promise<IBoard> {
        const existingBoard = await this.boardModel.findById(boardId).exec();

        if (!existingBoard) {
            throw new NotFoundException('Board #${boardId} not found');

        }
        return existingBoard;
    }

    async deleteBoard(boardId: string) : Promise<IBoard> {
        const deletedBoard = await this.boardModel.findByIdAndDelete(boardId);

        if (!deletedBoard) {
            throw new NotFoundException('Board #${boardId} not found');
        }
        return deletedBoard;
    }
}
