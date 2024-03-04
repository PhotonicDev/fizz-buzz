import { Component } from '@angular/core';
import { FizzBuzz, FizzBuzzService } from './fizz-buzz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly fizzBuzzService: FizzBuzzService) {}
  fizzBuzzArray!: FizzBuzz[];
  ngOnInit(): void {
    this.fizzBuzzArray = this.fizzBuzzService.fetchFizzBuzzArray();
  }
}
