import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciclaComponent } from './recicla.component';

describe('ReciclaComponent', () => {
  let component: ReciclaComponent;
  let fixture: ComponentFixture<ReciclaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciclaComponent]
    });
    fixture = TestBed.createComponent(ReciclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
