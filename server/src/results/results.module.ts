import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { ResultSchema } from './schema/boards.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Result", schema: ResultSchema }])],
    controllers: [ResultsController],
    providers: [ResultsService]
})
export class ResultsModule {

}
