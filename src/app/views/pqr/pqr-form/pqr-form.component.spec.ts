import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrFormComponent } from './pqr-form.component';

describe('PqrFormComponent', () => {
  let component: PqrFormComponent;
  let fixture: ComponentFixture<PqrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PqrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
