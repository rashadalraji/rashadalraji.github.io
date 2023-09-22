import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    closeButton:true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
