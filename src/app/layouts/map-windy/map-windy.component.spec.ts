import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWindyComponent } from './map-windy.component';

describe('MapWindyComponent', () => {
  let component: MapWindyComponent;
  let fixture: ComponentFixture<MapWindyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapWindyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWindyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
