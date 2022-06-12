import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result } from './schema/boards.schema';

@Injectable()
export class ResultsService {
    constructor(@InjectModel('Result') private readonly boardModel: Model<Result>) {}

    async createResult(resultJson) {
        await new Promise(r => setTimeout(r, 5000));
        return await this.calcResult(resultJson);
    }
    
    calcResult(resultJson): string {
        return "Yeah";
    }
}
