import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {

  private boards = [
    {
      id: 1,
      title: 'test#1',
      contents: 'content#1'
    },
    {
      id: 2,
      title: 'test#2',
      contents: 'content#2'
    },
    {
      id: 3,
      title: 'test#3',
      contents: 'content#3'
    },
    {
      id: 4,
      title: 'test#4',
      contents: 'content#4'
    },
  ];

  findAll() {
    return this.boards;
  }

  findOne(id: number) {
    const index = this.getBoardId(id);
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

  update(id: number, data) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return this.boards[index];
    }

    return null;
  }

  delete(id: number){
    const index = this.getBoardId(id);

    if(index > -1) {
      const deletedBoard = this.boards[index];
      this.boards.splice(index,1);
      return deletedBoard;
    }

    return null;
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }

  getNextId() {
    return this.boards.sort((a,b) => (b.id - a.id))[0].id+1;
  }

}
