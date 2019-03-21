import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// style / design
import { MaterialModule } from './material-module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// knora-ui modules
import { KuiCoreConfig, KuiCoreModule, ReadTextValueAsHtml } from '@knora/core';
import { KuiActionModule } from '@knora/action';
import { KuiSearchModule } from '@knora/search';
import { KuiViewerModule } from '@knora/viewer';
import { KuiAuthenticationModule } from '@knora/authentication';

// routing
import { AppRoutingModule } from './app-routing.module';

// environment configuration
import { environment } from '../environments/environment';

// Components, Services, Directives and Pipes
import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';
import { SearchResultComponent } from './search-result/search-result.component';

const conf: KuiCoreConfig = {
  name: environment.name,
  api: environment.api,
  media: environment.media,
  app: environment.app
};

@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NoopAnimationsModule,
    KuiCoreModule.forRoot(conf),
    KuiAuthenticationModule,
    KuiActionModule,
    KuiSearchModule,
    KuiViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
