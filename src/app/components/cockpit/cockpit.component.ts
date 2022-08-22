import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('svCreated')
  serverCreated: EventEmitter<{name: string, content: string}> = new EventEmitter();
  @Output('bpCreated')
  bluePrintCreated: EventEmitter<{name: string, content: string}> = new EventEmitter();

  // newServerName!: string;
  // newServerContent!: string;
  @ViewChild('serverContentInput')
  serverContentInput!: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    }
    );
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
