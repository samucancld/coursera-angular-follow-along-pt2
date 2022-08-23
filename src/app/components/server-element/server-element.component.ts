import {
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
  {
  @Input('srvElement')
  element!: {
    type: string;
    name: string;
    content: string;
  };

  @Input()
  name: string = '';

  @ViewChild('heading')
  header!: ElementRef;

  @ContentChild('contentParagraph')
  paragraph!: ElementRef;

  constructor() {
    // console.log('constructor called');
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges called', changes);
  };

  ngOnInit(): void {
    // console.log('ngOnInit called');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit called');
    // console.log('Content child', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit called');
    // console.log('Text Content', this.header.nativeElement.textContent);
  };

  ngOnDestroy(): void {
    // console.log('ngOnDestroy called');
  }

}
