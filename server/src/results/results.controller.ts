import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { json } from 'stream/consumers';
import { CreateResultDto, UpdateResultDto } from './dto/boards.dto';
import { ResultsService } from './results.service';

@Controller('result')
export class ResultsController {
    constructor(private readonly ResultService: ResultsService) {}

    @Post()
    async createResult(@Res() response, @Body() resultJson) {
        try {
            const resultScore = await this.ResultService.createResult(resultJson);

            return response.status(HttpStatus.CREATED).json({
                message: 'Result has been created successfully', resultScore, });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Result not created!',
                error: 'Bad Request!!'
            });
        }
    }
}
