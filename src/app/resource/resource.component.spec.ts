import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatCheckboxModule , MatDividerModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { ResourceComponent } from './resource.component';
import { ProgressIndicatorComponent, KeyPipe } from '@knora/action';

import { BooleanValueComponent,
  ColorValueComponent,
  DateValueComponent,
  DecimalValueComponent,
  GeometryValueComponent,
  IntegerValueComponent,
  IntervalValueComponent,
  LinkValueComponent,
  ListValueComponent,
  TextValueAsStringComponent,
  TextValueAsHtmlComponent,
  TextValueAsXmlComponent,
  TextfileValueComponent,
  UriValueComponent,
  StillImageComponent
 } from '@knora/viewer';
import { of } from 'rxjs';
import { KuiCoreConfigToken, KuiCoreConfig } from '@knora/core';

describe('ResourceComponent', () => {
  let component: ResourceComponent;
  let fixture: ComponentFixture<ResourceComponent>;

  const iri = 'http%3A%2F%2Frdfh.ch%2F0801%2FJth8ORQUR0aTOpuNHaIUzA';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatToolbarModule],
      declarations: [
        ResourceComponent,
        ProgressIndicatorComponent,
        KeyPipe,
        BooleanValueComponent,
        ColorValueComponent,
        DateValueComponent,
        DecimalValueComponent,
        GeometryValueComponent,
        IntegerValueComponent,
        IntervalValueComponent,
        LinkValueComponent,
        ListValueComponent,
        TextValueAsStringComponent,
        TextValueAsHtmlComponent,
        TextValueAsXmlComponent,
        TextfileValueComponent,
        UriValueComponent,
        StillImageComponent
      ],
      providers: [
        HttpClient,
        {
          provide: KuiCoreConfigToken,
          useValue: KuiCoreConfig
        },
        {
            provide: ActivatedRoute,
            useValue: {
                params: of({
                    get: (param: string) => {
                        if (param === 'iri') {
                            return iri;
                        } else {
                            console.log('no parameters');
                        }
                    }
                })
            }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
