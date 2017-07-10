import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-markdown-inliner',
  templateUrl: './markdown-inliner.component.html',
  styleUrls: ['./markdown-inliner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownInlinerComponent implements OnInit {
  @Input() text:string;
  constructor() { }

  ngOnInit() {
  }

}
