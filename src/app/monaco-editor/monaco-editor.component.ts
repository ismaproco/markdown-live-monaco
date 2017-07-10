import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { MonacoEditorService } from "app/monaco-editor/monaco-editor.service";

declare const monaco: any;

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef: ElementRef;
  @Input() text:string ='';
  private _disposed = false;
  private _editor: any;

  constructor(
    private _monacoLoader: MonacoEditorService
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Wait until monaco editor is available
    this._monacoLoader.waitForMonaco().then(() => {
      // Need to check if the view has already been destroyed before Monaco was loaded
      if (this._disposed) return;
      this.initMonaco();
    });
  }

  ngOnDestroy() {
    if (this._disposed) return;
    this._disposed = true;

    // Close possibly loaded editor component
    if (this._editor) this._editor.dispose();
    this._editor = null;
  }

  initMonaco() {
    this._editor = monaco.editor.create(this.editorRef.nativeElement, {
      value: this.text,
      language: 'markdown',
    });

    this._monacoLoader.setEditorReference(this._editor);
  }
}
