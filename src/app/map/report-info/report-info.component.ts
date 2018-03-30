import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { ReportInterface } from '../../interfaces';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-report-info',
  templateUrl: './report-info.component.html',
  styleUrls: ['./report-info.component.scss']
})
export class ReportInfoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() features: {
    [name: string]: any
  }[];

  @Output() closePane = new EventEmitter<null>();

  feature: ReportInterface;
  parsedReportData: {
    [name: string]: any
  };
  parsedTags: {
    [name: string]: any
  };
  timestamp: string;

  constructor(
    public timeService: TimeService
  ) {}

  ngOnInit() {
    this.timestamp = this.timeService.getLocalTimestamp(this.feature.created_at);
  }

  closeInfoPane() {
    this.closePane.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('features')) {
      // this.features[0].properties.report_data = JSON.parse(this.features[0].properties.report_data);
      // this.features[0].properties.tags = JSON.parse(this.features[0].properties.tags);

      this.feature = this.features[0].properties;

      if (this.feature.report_data) {
        this.parsedReportData = JSON.parse(this.feature.report_data);
      }

      if (this.feature.tags) {
        this.parsedTags = JSON.parse(this.feature.tags);
      }
    }
  }

  ngOnDestroy() {
    this.features = null;
    this.feature = null;
  }
}
