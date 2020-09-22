import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetdataComponent } from './getdata/getdata.component';
import { SetdataComponent } from './setdata/setdata.component';
import { NumberComponent } from './number/number.component';

@NgModule({
  declarations: [AppComponent, GetdataComponent, SetdataComponent, NumberComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
