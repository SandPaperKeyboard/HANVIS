import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './schema/user.schema';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto) : Promise<IUser> {
        const existingUser = await this.userModel.findByIdAndUpdate(userId, updateUserDto, {
            new: true
        });

        if (!existingUser) {
            throw new NotFoundException('User #${userId} not found');
        }
        return existingUser;
    }

    async getAllUsers() : Promise<IUser[]> {
        const userData = await this.userModel.find();

        if (!userData || userData.length == 0) {
            throw new NotFoundException('Users data not found!');
        }
        return userData;
    }

    async getUser(userId: string) : Promise<IUser> {
        const existingUser = await this.userModel.findById(userId).exec();

        if (!existingUser) {
            throw new NotFoundException('User #${userId} not found');

        }
        return existingUser;
    }

    async deleteUser(userId: string) : Promise<IUser> {
        const deletedUser = await this.userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            throw new NotFoundException('User #${userId} not found');
        }
        return deletedUser;
    }
}
