import { TestBed, inject } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FizzBuzzService],
    });
  });

  it('should be created', inject(
    [FizzBuzzService],
    (service: FizzBuzzService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return the first 100 items of FizzBuzz logic', inject(
    [FizzBuzzService],
    (service: FizzBuzzService) => {
      const result = service.fetchFizzBuzzArray();

      expect(result.length).toBe(100);

      expect(result[0]).toBe(1);
      expect(result[2]).toBe('Fizz');
      expect(result[4]).toBe('Buzz');
      expect(result[14]).toBe('FizzBuzz');

      expect(result[74]).toBe('FizzBuzz');
      expect(result[89]).toBe('FizzBuzz');
      expect(result[99]).toBe('Buzz');
    }
  ));
});
