import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupItemComponent } from './group-item.component';
import { RouterModule } from '@angular/router';

describe('GroupItemComponent', () => {
  let component: GroupItemComponent;
  let fixture: ComponentFixture<GroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupItemComponent],
      imports: [
        RouterModule.forRoot([]),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
