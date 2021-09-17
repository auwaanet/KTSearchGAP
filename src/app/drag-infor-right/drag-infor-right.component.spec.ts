import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragInforRightComponent } from './drag-infor-right.component';

describe('DragInforRightComponent', () => {
  let component: DragInforRightComponent;
  let fixture: ComponentFixture<DragInforRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragInforRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragInforRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
