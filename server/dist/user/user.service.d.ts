import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './schema/user.schema';
import { IUser } from './user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    getUser(userId: string): Promise<IUser>;
    deleteUser(userId: string): Promise<IUser>;
}
