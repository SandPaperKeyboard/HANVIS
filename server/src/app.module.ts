/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BoardsModule } from './boards/boards.module';
import { ResultsModule } from './results/results.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    // 클라이언트 정적 모듈
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '..', 'client/build')
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: 'hanvis',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule,
    BoardsModule,
    ResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
