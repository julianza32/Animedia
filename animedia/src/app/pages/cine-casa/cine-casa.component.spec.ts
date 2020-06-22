import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CineCasaComponent } from './cine-casa.component';

describe('CineCasaComponent', () => {
  let component: CineCasaComponent;
  let fixture: ComponentFixture<CineCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CineCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CineCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
