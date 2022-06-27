/* eslint-disable prettier/prettier */
import { Req, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import axios from 'axios';
import { AppModule } from './app.module';

const sec = 1000;
const min = 60 * sec;
var url;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: true,
    }),
  );

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
  url = await app.getUrl();
}
bootstrap();

setInterval(async () => {
  await axios.get(url + "/api")
  .then().catch();
  
}, 25*min);