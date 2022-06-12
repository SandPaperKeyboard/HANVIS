import { Model } from 'mongoose';
import { CreateBoardDto, UpdateBoardDto } from './dto/boards.dto';
import { IBoard } from './interface/boards.interface';
import { Board } from './schema/boards.schema';
export declare class BoardsService {
    private readonly boardModel;
    constructor(boardModel: Model<Board>);
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    updateBoard(boardId: string, updateBoardDto: UpdateBoardDto): Promise<IBoard>;
    getAllBoards(): Promise<IBoard[]>;
    getBoard(boardId: string): Promise<IBoard>;
    deleteBoard(boardId: string): Promise<IBoard>;
}
