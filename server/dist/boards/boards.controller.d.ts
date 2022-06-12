import { BoardsService } from './boards.service';
import { CreateBoardDto, UpdateBoardDto } from './dto/boards.dto';
export declare class BoardsController {
    private readonly BoardService;
    constructor(BoardService: BoardsService);
    createBoard(response: any, createBoardDto: CreateBoardDto): Promise<any>;
    updateBoard(response: any, BoardId: string, updateBoardDto: UpdateBoardDto): Promise<any>;
    getBoards(response: any): Promise<any>;
    getBoard(response: any, BoardId: string): Promise<any>;
    deleteBoard(response: any, BoardId: string): Promise<any>;
}
