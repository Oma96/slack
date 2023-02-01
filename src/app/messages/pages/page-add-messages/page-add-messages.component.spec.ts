import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddMessagesComponent } from './page-add-messages.component';

describe('PageAddMessagesComponent', () => {
  let component: PageAddMessagesComponent;
  let fixture: ComponentFixture<PageAddMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
