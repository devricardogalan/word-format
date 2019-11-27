import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordformatComponent } from './wordformat.component';

describe('WordformatComponent', () => {
  let component: WordformatComponent;
  let fixture: ComponentFixture<WordformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
