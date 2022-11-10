import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

enum State {
  blank = '',
  x = 'x',
  o = 'o'
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  boardSize: number = 3;
  board: State[][] = [
    [State.blank, State.blank, State.blank],
    [State.blank, State.blank, State.blank],
    [State.blank, State.blank, State.blank]
  ];

  moveCount = 0;

  _currentPlayer = State.x;

  public get currentPlayer() {
    let cp = this._currentPlayer;
    this._currentPlayer = State.x

    if (cp === State.x)
      this._currentPlayer = State.o

    return cp;
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(x: number, y: number) {
    if (this.board[x][y] !== State.blank) {
      return;
    }
    let currentState = this.currentPlayer;
    this.board[x][y] = currentState;

    let checkForWinnerParam = {
      x: x,
      y: y,
      s: currentState
    }
    this.checkForWinner(checkForWinnerParam);
  }

  checkForWinner(params: { x: number, y: number, s: State }) {
    //check for a straight right
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board[params.x][i] != params.s)
        break;
      if (i == this.boardSize - 1) {
        console.log(`Winner is: ${params.s}`);
        //report win for s
      }
    }

    //check row
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board[i][params.y] != params.s)
        break;
      if (i == this.boardSize - 1) {

        console.log(`Winner is: ${params.s}`);
        //report win for s
      }
    }

    //check diag
    if (params.x == params.y) {
      //we're on a diagonal
      for (let i = 0; i < this.boardSize; i++) {
        if (this.board[i][i] != params.s)
          break;
        if (i == this.boardSize - 1) {

          console.log(`Winner is: ${params.s}`);
          //report win for s
        }
      }
    }

    //check anti diag (thanks rampion)
    if (params.x + params.y == this.boardSize - 1) {
      for (let i = 0; i < this.boardSize; i++) {
        if (this.board[i][(this.boardSize - 1) - i] != params.s)
          break;
        if (i == this.boardSize - 1) {

          console.log(`Winner is: ${params.s}`);
          //report win for s
        }
      }
    }
  }
}