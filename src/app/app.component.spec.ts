import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as fizz buzz array with 100 elements`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.fizzBuzzArray.length).toEqual(100);
  });

  it('should render fizz buzz to the page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const fizzBuzzDomElements = compiled.querySelectorAll('div p');
    expect(fizzBuzzDomElements[0].textContent).toContain('1');
    expect(fizzBuzzDomElements[1].textContent).toContain('2');
    expect(fizzBuzzDomElements[2].textContent).toContain('Fizz');
    expect(fizzBuzzDomElements[3].textContent).toContain('4');
    expect(fizzBuzzDomElements[18].textContent).toContain('19');
    expect(fizzBuzzDomElements[29].textContent).toContain('FizzBuzz');
  });
});
