import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresRComponent } from './tres-r.component';

describe('TresRComponent', () => {
  let component: TresRComponent;
  let fixture: ComponentFixture<TresRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TresRComponent]
    });
    fixture = TestBed.createComponent(TresRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
