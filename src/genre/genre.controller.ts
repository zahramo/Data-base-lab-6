import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import {ApiBearerAuth} from '@nestjs/swagger'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  @Post('post')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.genreServices.getAllGenre();
  }
}