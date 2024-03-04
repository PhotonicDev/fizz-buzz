import { Injectable } from '@angular/core';

export type FizzBuzz = 'Fizz' | 'Buzz' | 'FizzBuzz' | number;

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzService {
  fetchFizzBuzzArray(): FizzBuzz[] {
    return Array(100)
      .fill(0)
      .map((_, i) => {
        const index = i + 1;
        if (index % 3 === 0 && index % 5 === 0) {
          return 'FizzBuzz';
        } else if (index % 3 === 0) {
          return 'Fizz';
        } else if (index % 5 === 0) {
          return 'Buzz';
        } else {
          return index;
        }
      });
  }
}
