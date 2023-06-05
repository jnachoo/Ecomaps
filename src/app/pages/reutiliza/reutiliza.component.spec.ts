import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReutilizaComponent } from './reutiliza.component';

describe('ReutilizaComponent', () => {
  let component: ReutilizaComponent;
  let fixture: ComponentFixture<ReutilizaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReutilizaComponent]
    });
    fixture = TestBed.createComponent(ReutilizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
