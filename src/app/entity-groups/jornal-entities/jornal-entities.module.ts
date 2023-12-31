import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// import { JournalComponent } from './item-pages/journal/journal.component';
// import { JournalIssueComponent } from './item-pages/journal-issue/journal-issue.component';
// import { JournalVolumeComponent } from './item-pages/journal-volume/journal-volume.component';
import { JornalListElementComponent } from './item-list-elements/jornal/jornal-list-element.component';
// import { JournalIssueListElementComponent } from './item-list-elements/journal-issue/journal-issue-list-element.component';
import { JornalAnoListElementComponent } from './item-list-elements/jornal-ano/jornal-ano-list-element.component';
// import { JournalIssueGridElementComponent } from './item-grid-elements/journal-issue/journal-issue-grid-element.component';
import { JornalAnoGridElementComponent } from './item-grid-elements/jornal-ano/jornal-ano-grid-element.component';
import { JornalGridElementComponent } from './item-grid-elements/jornal/jornal-grid-element.component';
// import { JournalSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/journal/journal-search-result-list-element.component';
// import { JournalSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/journal/journal-search-result-grid-element.component';
// import { JournalIssueSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/journal-issue/journal-issue-search-result-list-element.component';
// import { JournalVolumeSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/journal-volume/journal-volume-search-result-list-element.component';
// import { JournalIssueSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/journal-issue/journal-issue-search-result-grid-element.component';
// import { JournalVolumeSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/journal-volume/journal-volume-search-result-grid-element.component';
// import { JournalVolumeSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/journal-volume/journal-volume-sidebar-search-list-element.component';
// import { JournalIssueSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/journal-issue/journal-issue-sidebar-search-list-element.component';
// import { JournalSidebarSearchListElementComponent } from './item-list-elements/sidebar-search-list-elements/journal/journal-sidebar-search-list-element.component';
import { ItemSharedModule } from '../../item-page/item-shared.module';
import { ResultsBackButtonModule } from '../../shared/results-back-button/results-back-button.module';
import { DsoPageModule } from '../../shared/dso-page/dso-page.module';

const ENTRY_COMPONENTS = [
  // put only entry components that use custom decorator
  // JournalComponent,
  // JournalIssueComponent,
  // JournalVolumeComponent,
  // JournalListElementComponent,
  // JournalIssueListElementComponent,
  // JournalVolumeListElementComponent,
  // JournalIssueGridElementComponent,
  // JournalVolumeGridElementComponent,
  JornalGridElementComponent,
  // JournalSearchResultListElementComponent,
  // JournalIssueSearchResultListElementComponent,
  // JournalVolumeSearchResultListElementComponent,
  // JournalIssueSearchResultGridElementComponent,
  // JournalVolumeSearchResultGridElementComponent,
  // JournalSearchResultGridElementComponent,
  // JournalVolumeSidebarSearchListElementComponent,
  // JournalIssueSidebarSearchListElementComponent,
  // JournalSidebarSearchListElementComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ItemSharedModule,
    SharedModule,
    ResultsBackButtonModule,
    DsoPageModule
  ],
  declarations: [
    ...ENTRY_COMPONENTS
  ]
})
export class JornalEntitiesModule {
  /**
   * NOTE: this method allows to resolve issue with components that using a custom decorator
   * which are not loaded during SSR otherwise
   */
  static withEntryComponents() {
    return {
      ngModule: JornalEntitiesModule,
      providers: ENTRY_COMPONENTS.map((component) => ({provide: component}))
    };
  }

}
