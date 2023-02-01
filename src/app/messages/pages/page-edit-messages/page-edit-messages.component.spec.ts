import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditMessagesComponent } from './page-edit-messages.component';

describe('PageEditMessagesComponent', () => {
  let component: PageEditMessagesComponent;
  let fixture: ComponentFixture<PageEditMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
