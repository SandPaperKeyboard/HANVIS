export declare class CreateResultDto {
    readonly title: string;
    readonly content: string;
}
declare const UpdateResultDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateResultDto>>;
export declare class UpdateResultDto extends UpdateResultDto_base {
}
export {};
