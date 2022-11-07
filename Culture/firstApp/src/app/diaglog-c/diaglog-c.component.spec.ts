import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaglogCComponent } from './diaglog-c.component';

describe('DiaglogCComponent', () => {
  let component: DiaglogCComponent;
  let fixture: ComponentFixture<DiaglogCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaglogCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaglogCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
