import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeTableComponent } from './notice-table.component';

describe('NoticeTableComponent', () => {
  let component: NoticeTableComponent;
  let fixture: ComponentFixture<NoticeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
