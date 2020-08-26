import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphlComponent } from './maphl.component';

describe('MaphlComponent', () => {
  let component: MaphlComponent;
  let fixture: ComponentFixture<MaphlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaphlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaphlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
