import { Body, Controller, Get, Post, Delete, Param, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import ChangeBookDto from './dto/change-book.dto';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookServices: BooksService) {}

  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.bookServices.insert(book);
  }

  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }

  @Delete()
  deleteBook( @Param('bookId') bookId: number) {
      return this.bookServices.deleteBook(bookId)
  }

  @Put()
  changeBook(@Body() book: ChangeBookDto) {
      return this.bookServices.changeBook(book)
  }

}