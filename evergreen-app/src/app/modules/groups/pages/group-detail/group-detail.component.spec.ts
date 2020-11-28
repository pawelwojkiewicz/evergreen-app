import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailComponent } from './group-detail.component';
import { RouterModule } from '@angular/router';

describe('GroupItemComponent', () => {
  let component: GroupDetailComponent;
  let fixture: ComponentFixture<GroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupDetailComponent],
      imports: [
        RouterModule.forRoot([]),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailComponent ;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
