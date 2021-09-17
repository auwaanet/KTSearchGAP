import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragInforComponent } from './drag-infor.component';

describe('DragInforComponent', () => {
  let component: DragInforComponent;
  let fixture: ComponentFixture<DragInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
