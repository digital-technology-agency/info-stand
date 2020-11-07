import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ElectronService} from './@core/services/electron.service';
import {Local} from './@core/locals';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    electron: any;
    fs: any;
    footerText = 'version: ';

    constructor(private electronService: ElectronService,
                private translate: TranslateService) {
        translate.setTranslation('en', Local.en());
        translate.setTranslation('ru', Local.ru());
        translate.setDefaultLang('en');
    }

    ngOnInit() {
        if (this.electronService.isElectron) {
            console.log('Run in electron');
            this.electron = this.electronService.electron;
            this.fs = this.electronService.fs;
            this.footerText = `version: ${this.electronService.appVersion}`;
            const url = this.electronService.electronUpdater.getFeedURL();
            console.log('Url: ', url, 'autoUpdater: ', this.electronService.electronUpdater);
        } else {
            console.log('Browser');
        }
    }

    ngOnDestroy() {
    }
}
