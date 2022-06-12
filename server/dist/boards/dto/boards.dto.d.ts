export declare class CreateBoardDto {
    readonly title: string;
    readonly content: string;
}
declare const UpdateBoardDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBoardDto>>;
export declare class UpdateBoardDto extends UpdateBoardDto_base {
}
export {};
