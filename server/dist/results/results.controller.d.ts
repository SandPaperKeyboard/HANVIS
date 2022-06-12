import { ResultsService } from './results.service';
export declare class ResultsController {
    private readonly ResultService;
    constructor(ResultService: ResultsService);
    createResult(response: any, resultJson: any): Promise<any>;
}
