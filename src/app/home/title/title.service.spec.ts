import {
  inject,
  async,
  TestBed,
  ComponentFixture,
  getTestBed
} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Title } from './title.service';

describe('Title', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Title]
    });
  });

  it('should have http', inject([Title], (title: Title) => {
    expect(!!title.http).toEqual(true);
  }));
});
