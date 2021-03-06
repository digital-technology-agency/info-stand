import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ClipboardModule} from 'ngx-clipboard';
import {ToastrModule} from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {TranslateModule} from '@ngx-translate/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MainComponent} from './main/main.component';
import {ThemeModule} from './@themes/theme.module';
import {SearchViewComponent} from './search-view/search-view.component';
import { SearchKeyboardComponent } from './search-keyboard/search-keyboard.component';
import { KeyboardKeyComponent } from './search-keyboard/keyboard-key/keyboard-key.component';

const MATERIAL_MODULES = [
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
];
const ENTRY_COMPONENTS = [MainComponent, SearchViewComponent];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        ...ENTRY_COMPONENTS,
        AppComponent,
        SearchKeyboardComponent,
        KeyboardKeyComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        FormsModule,
        ClipboardModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(
            {
                defaultLanguage: 'en',
            },
        ),
        OverlayModule,
        PortalModule,
        ScrollingModule,
        ...MATERIAL_MODULES,
        ThemeModule,
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [...ENTRY_COMPONENTS],
})
export class AppModule {
}
