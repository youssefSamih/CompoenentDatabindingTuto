import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagrpah') paragaraph: ElementRef;

  constructor() {
    console.log('contructor called !');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called !');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called !');
  }

  ngDoCheck() {
    console.log('ngDoCheck called !');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called !');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called !');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called !');
    console.log('textContent', this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: '+this.paragaraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called !');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called !');
  }
}
