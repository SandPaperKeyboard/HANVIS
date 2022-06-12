import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResultDto, UpdateResultDto } from './dto/boards.dto';
import { IResult } from './interface/results.interface';
import { Result } from './schema/boards.schema';

@Injectable()
export class ResultsService {
    constructor(@InjectModel('Result') private readonly boardModel: Model<Result>) {}

    async createResult(createResultDto: CreateResultDto): Promise<Result> {
        const createdResult = new this.boardModel(createResultDto);
        return await createdResult.save();
    }

    async updateResult(boardId: string, updateResultDto: UpdateResultDto) : Promise<IResult> {
        const existingResult = await this.boardModel.findByIdAndUpdate(boardId, updateResultDto, {
            new: true
        });

        if (!existingResult) {
            throw new NotFoundException('Result #${boardId} not found');
        }
        return existingResult;
    }

    async getAllResults() : Promise<IResult[]> {
        const boardData = await this.boardModel.find();

        if (!boardData || boardData.length == 0) {
            throw new NotFoundException('Results data not found!');
        }
        return boardData;
    }

    async getResult(boardId: string) : Promise<IResult> {
        const existingResult = await this.boardModel.findById(boardId).exec();

        if (!existingResult) {
            throw new NotFoundException('Result #${boardId} not found');

        }
        return existingResult;
    }

    async deleteResult(boardId: string) : Promise<IResult> {
        const deletedResult = await this.boardModel.findByIdAndDelete(boardId);

        if (!deletedResult) {
            throw new NotFoundException('Result #${boardId} not found');
        }
        return deletedResult;
    }
}
