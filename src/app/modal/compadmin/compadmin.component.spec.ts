import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompadminComponent } from './compadmin.component';

describe('CompadminComponent', () => {
  let component: CompadminComponent;
  let fixture: ComponentFixture<CompadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
