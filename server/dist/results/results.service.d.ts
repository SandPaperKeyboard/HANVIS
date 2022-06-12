import { Model } from 'mongoose';
import { Result } from './schema/boards.schema';
export declare class ResultsService {
    private readonly boardModel;
    constructor(boardModel: Model<Result>);
    createResult(resultJson: any): Promise<string>;
    calcResult(resultJson: any): string;
}
