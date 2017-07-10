import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { MonacoEditorService } from "app/monaco-editor/monaco-editor.service";

import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { MarkdownInlinerComponent } from './markdown-inliner/markdown-inliner.component';

@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent,
    MarkdownInlinerComponent
  ],
  imports: [
    BrowserModule,
    MarkdownToHtmlModule
  ],
  providers: [MonacoEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
