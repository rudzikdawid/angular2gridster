import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridsterModule } from 'angular2gridster/dist/gridster.module';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        GridsterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
