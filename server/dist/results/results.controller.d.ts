import { CreateResultDto, UpdateResultDto } from './dto/boards.dto';
import { ResultsService } from './results.service';
export declare class ResultsController {
    private readonly ResultService;
    constructor(ResultService: ResultsService);
    createResult(response: any, createResultDto: CreateResultDto): Promise<any>;
    updateResult(response: any, ResultId: string, updateResultDto: UpdateResultDto): Promise<any>;
    getResults(response: any): Promise<any>;
    getResult(response: any, ResultId: string): Promise<any>;
    deleteResult(response: any, ResultId: string): Promise<any>;
}
