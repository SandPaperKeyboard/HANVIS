/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto, UpdateBoardDto } from './dto/boards.dto';

@Controller('boards')
export class BoardsController {
    constructor(private readonly BoardService: BoardsService) {}

    @Post()
    async createBoard(@Res() response, @Body() createBoardDto: CreateBoardDto) {
        try {
            const newBoard = await this.BoardService.createBoard(createBoardDto);

            return response.status(HttpStatus.CREATED).json({
                message: 'Board has been created successfully', newBoard, });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Board not created!',
                error: 'Bad Request!!'
            });
        }
    }

    @Put('/:id')
    async updateBoard(@Res() response, @Param('id') BoardId: string, @Body() updateBoardDto: UpdateBoardDto) {
        try {
            const existingBoard = await this.BoardService.updateBoard(BoardId, updateBoardDto);

            return response.status(HttpStatus.OK).json({
                message: 'Board has been successfully updated', 
                existingBoard,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getBoards(@Res() response) {
        try {
            const BoardData = await this.BoardService.getAllBoards();
            return response.status(HttpStatus.OK).json({
                message: 'All Boards data found successfully', BoardData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getBoard(@Res() response, @Param('id') BoardId: string) {
        try {
            const existingBoard = await this.BoardService.getBoard(BoardId);
            return response.status(HttpStatus.OK).json({
                message: 'Board found successfully', existingBoard,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteBoard(@Res() response, @Param('id') BoardId: string) {
        try {
            const deletedBoard = await this.BoardService.deleteBoard(BoardId);

            return response.status(HttpStatus.OK).json({
                message: 'Board deleted successfully',
                deletedBoard,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
