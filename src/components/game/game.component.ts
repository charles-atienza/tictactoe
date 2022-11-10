import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  _currentPlayer = 'x';

  public get currentPlayer() {
    let cp = this._currentPlayer;
    if (this._currentPlayer == 'x')
      this._currentPlayer = 'x'
    else {
      this._currentPlayer = 'o'
    }

    return cp;
  }

  boardSize: string[] = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(index: number) {
    console.log(this.boardSize)
    this.boardSize[index] = this.currentPlayer;
  }
}
