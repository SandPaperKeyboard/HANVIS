import { Model } from 'mongoose';
import { CreateResultDto, UpdateResultDto } from './dto/boards.dto';
import { IResult } from './interface/results.interface';
import { Result } from './schema/boards.schema';
export declare class ResultsService {
    private readonly boardModel;
    constructor(boardModel: Model<Result>);
    createResult(createResultDto: CreateResultDto): Promise<Result>;
    updateResult(boardId: string, updateResultDto: UpdateResultDto): Promise<IResult>;
    getAllResults(): Promise<IResult[]>;
    getResult(boardId: string): Promise<IResult>;
    deleteResult(boardId: string): Promise<IResult>;
}
