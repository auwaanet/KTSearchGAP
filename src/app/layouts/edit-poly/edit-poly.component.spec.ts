import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolyComponent } from './edit-poly.component';

describe('EditPolyComponent', () => {
  let component: EditPolyComponent;
  let fixture: ComponentFixture<EditPolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPolyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
