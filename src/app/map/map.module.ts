import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Components
import { MapComponent } from './map.component';
import { AreaInfoComponent } from './area-info/area-info.component';
import { InfraInfoComponent } from './infra-info/infra-info.component';
import { ReportInfoComponent } from './report-info/report-info.component';
import { SensorInfoComponent } from './sensor-info/sensor-info.component';
import { ScreenPopupComponent } from './screen-popup/screen-popup.component';
import { SidePaneComponent } from './side-pane/side-pane.component';
import { ReportContentComponent } from './side-pane/report-content/report-content.component';
import { MapContentComponent } from './side-pane/map-content/map-content.component';
import { InfoContentComponent } from './side-pane/info-content/info-content.component';

// Modules
import { CustomMaterialsModule } from '../custom-materials.module';

// Services
import { ChartService } from '../services/chart.service';
import { HttpService } from '../services/http.service';
import { InteractionService } from '../services/interaction.service';
import { LayerService } from '../services/layer.service';
import { SensorService } from '../services/sensor.service';
import { TimeService } from '../services/time.service';

// Pipes
import { SanitizePipe } from '../pipes/sanitize.pipe';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialsModule,
    RouterModule,
    TranslateModule
  ],
  providers: [
    TimeService,
    LayerService,
    HttpService,
    TranslatePipe,
    SensorService,
    InteractionService,
    ChartService
  ],
  entryComponents: [ScreenPopupComponent],
  declarations: [
    ReportInfoComponent,
    SensorInfoComponent,
    AreaInfoComponent,
    ScreenPopupComponent,
    SidePaneComponent,
    MapComponent,
    InfraInfoComponent,
    ReportContentComponent,
    MapContentComponent,
    InfoContentComponent,
    SanitizePipe
  ]
})
export class MapModule { }
