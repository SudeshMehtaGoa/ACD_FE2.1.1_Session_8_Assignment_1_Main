import { Component } from '@angular/core';
import { MathServiceService } from 'app/service/math-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MathServiceService]
})
export class AppComponent {
  title: string = 'Number Array with Service';
  newNumber: number;
  numberArray: number[] = [];

  constructor(private _mathsService: MathServiceService) { }

  addNumber() {
    this._mathsService.addNumberToarray(this.newNumber);
    this.numberArray = this._mathsService.getNumberArray();
  }
}
