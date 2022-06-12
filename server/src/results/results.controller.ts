import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateResultDto, UpdateResultDto } from './dto/boards.dto';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
    constructor(private readonly ResultService: ResultsService) {}

    @Post()
    async createResult(@Res() response, @Body() createResultDto: CreateResultDto) {
        try {
            const newResult = await this.ResultService.createResult(createResultDto);

            return response.status(HttpStatus.CREATED).json({
                message: 'Result has been created successfully', newResult, });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Result not created!',
                error: 'Bad Request!!'
            });
        }
    }

    @Put('/:id')
    async updateResult(@Res() response, @Param('id') ResultId: string, @Body() updateResultDto: UpdateResultDto) {
        try {
            const existingResult = await this.ResultService.updateResult(ResultId, updateResultDto);

            return response.status(HttpStatus.OK).json({
                message: 'Result has been successfully updated', 
                existingResult,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getResults(@Res() response) {
        try {
            const ResultData = await this.ResultService.getAllResults();
            return response.status(HttpStatus.OK).json({
                message: 'All Results data found successfully', ResultData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getResult(@Res() response, @Param('id') ResultId: string) {
        try {
            const existingResult = await this.ResultService.getResult(ResultId);
            return response.status(HttpStatus.OK).json({
                message: 'Result found successfully', existingResult,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteResult(@Res() response, @Param('id') ResultId: string) {
        try {
            const deletedResult = await this.ResultService.deleteResult(ResultId);

            return response.status(HttpStatus.OK).json({
                message: 'Result deleted successfully',
                deletedResult,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
