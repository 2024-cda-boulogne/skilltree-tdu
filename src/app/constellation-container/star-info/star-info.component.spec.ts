import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarInfoComponent } from './star-info.component';

describe('StarInfoComponent', () => {
  let component: StarInfoComponent;
  let fixture: ComponentFixture<StarInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StarInfoComponent]
    });
    fixture = TestBed.createComponent(StarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
