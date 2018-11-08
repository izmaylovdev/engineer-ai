import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
