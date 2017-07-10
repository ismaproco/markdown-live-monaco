import { Component } from '@angular/core';
import { MonacoEditorService } from "app/monaco-editor/monaco-editor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markdownText: string = `# (GitHub-Flavored) Markdown Editor

Basic useful feature list:

 * Ctrl+S / Cmd+S to save the file
 * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML
 * Drag and drop a file into here to load it
 * File contents are saved in the URL so you can share files


I'm no good at writing sample / filler text, so go write something yourself.

Look, a list!

 * foo
 * bar
 * baz`;

  constructor( private editorService: MonacoEditorService) {

  }


  update() {
    let _editor = this.editorService.getEditors()[0];
    console.log(_editor.getValue());
    this.markdownText = _editor.getValue();
  }
}
