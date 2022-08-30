import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }
  board !:Array<string>

  playerTurn = 'X'

  winningBorder = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
  ]
  ngOnInit(): void {
    this.board = new Array(9).fill('')
  }

  handlePlayer(index: number) {
    this.board[index]=this.playerTurn;
    this.playerTurn = (this.playerTurn==='X') ? 'O' : "X";

    for (let i = 0; i < this.winningBorder.length; i++) {
      let winningCheck = this.winningBorder[i];
      let p1 = winningCheck[0];
      let p2 = winningCheck[1];
      let p3 = winningCheck[2];
      if (this.board[p1] !== ''
        && this.board[p1] === this.board[p2]
        && this.board[p2] === this.board[p3]
        ) {
          alert('Player ' + this.board[p1] + ' has WON the Game!')
    }
    }
  }

  handleReset() {
    this.board = new Array(9).fill('');
  }
}
