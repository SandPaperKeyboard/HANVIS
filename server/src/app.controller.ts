/* eslint-disable prettier/prettier */
import { Request } from 'express';
import { Controller, Get, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';


@Controller('*')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect(join(__dirname, '..', 'client/build/index.html'))
  getHello(): string {
    return '';
  }
}