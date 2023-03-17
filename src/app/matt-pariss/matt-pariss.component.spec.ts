import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattParissComponent } from './matt-pariss.component';

describe('MattParissComponent', () => {
  let component: MattParissComponent;
  let fixture: ComponentFixture<MattParissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattParissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattParissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
