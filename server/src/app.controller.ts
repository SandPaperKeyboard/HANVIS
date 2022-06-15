/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) { 
    return res.status(HttpStatus.OK).json([]);
  }
}