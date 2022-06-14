/* eslint-disable prettier/prettier */
import { Request } from 'express';
import { Controller, Get, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { dirname, join } from 'path';


@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  redirect() { }
}