import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() subNavHeader: string | undefined;
  @Input() subNavParagraph: string | undefined;

}
