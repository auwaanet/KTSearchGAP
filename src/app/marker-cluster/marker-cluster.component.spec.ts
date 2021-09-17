import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerClusterComponent } from './marker-cluster.component';

describe('MarkerClusterComponent', () => {
  let component: MarkerClusterComponent;
  let fixture: ComponentFixture<MarkerClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkerClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
