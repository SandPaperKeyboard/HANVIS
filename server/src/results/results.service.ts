import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ResultsService {
    private readonly logger = new Logger(ResultsService.name);

    async createResult(resultJson) {
        //await new Promise(r => setTimeout(r, 1000));
        this.logger.log(resultJson);
        return resultJson;
    }
    
    calcResult(resultJson) {
        return resultJson;
    }
}
