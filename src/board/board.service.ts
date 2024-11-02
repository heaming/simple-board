import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {

  private boards = [
    {
      id: 1,
      title: 'test#1',
      content: 'content#1'
    },
    {
      id: 2,
      title: 'test#2',
      content: 'content#2'
    },
    {
      id: 3,
      title: 'test#3',
      content: 'content#3'
    },
    {
      id: 4,
      title: 'test#4',
      content: 'content#4'
    },
  ];

  findAll() {
    return this.boards;
  }

  findOne(id: number) {
    const index = this.boards.findIndex(board => board.id === id);
    return this.boards[index];
  }

  create(data) {
    const newBoard = {
      id: this.getNextId(),
      ...data
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  getNextId() {
    return this.boards.sort((a,b) => (b.id - a.id))[0].id+1;
  }

}
