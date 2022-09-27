import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRowsComponent } from './blog-rows.component';

describe('blogRowsComponent', () => {
  let component: BlogRowsComponent;
  let fixture: ComponentFixture<BlogRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
