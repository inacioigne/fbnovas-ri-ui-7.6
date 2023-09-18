import { Item } from '../../../../core/shared/item.model';
import { of as observableOf } from 'rxjs';
import { JornalGridElementComponent } from './jornal-grid-element.component';
import { createSuccessfulRemoteDataObject$ } from '../../../../shared/remote-data.utils';
import { buildPaginatedList } from '../../../../core/data/paginated-list.model';
import { PageInfo } from '../../../../core/shared/page-info.model';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from '../../../../shared/utils/truncate.pipe';
import { TruncatableService } from '../../../../shared/truncatable/truncatable.service';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DSONameService } from '../../../../core/breadcrumbs/dso-name.service';
import { DSONameServiceMock } from '../../../../shared/mocks/dso-name.service.mock';

const mockItem = Object.assign(new Item(), {
  bundles: createSuccessfulRemoteDataObject$(buildPaginatedList(new PageInfo(), [])),
  metadata: {
    'dc.title': [
      {
        language: 'en_US',
        value: 'This is just another title'
      }
    ],
    'creativework.editor': [
      {
        language: 'en_US',
        value: 'Smith, Donald'
      }
    ],
    'creativework.publisher': [
      {
        language: 'en_US',
        value: 'A company'
      }
    ],
    'dc.description': [
      {
        language: 'en_US',
        value: 'This is the description'
      }
    ]
  }
});

describe('JournalGridElementComponent', () => {
  let comp;
  let fixture;

  const truncatableServiceStub: any = {
    isCollapsed: (id: number) => observableOf(true),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [JornalGridElementComponent, TruncatePipe],
      providers: [
        { provide: DSONameService, useValue: new DSONameServiceMock() },
        { provide: TruncatableService, useValue: truncatableServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(JornalGridElementComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(JornalGridElementComponent);
    comp = fixture.componentInstance;
  }));

  describe(`when the journal is rendered`, () => {
    beforeEach(() => {
      comp.object = mockItem;
      fixture.detectChanges();
    });

    it(`should contain a JournalGridElementComponent`, () => {
      const jornalGridElement = fixture.debugElement.query(By.css(`ds-jornal-search-result-grid-element`));
      expect(jornalGridElement).not.toBeNull();
    });
  });
});
