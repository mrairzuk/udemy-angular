import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string
  @ViewChild('heading') header: ElementRef
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() { 
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes called")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ng on init called")
    console.log(this.header.nativeElement.textContent)
    console.log(this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInitCalled!')
    console.log(this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked called")
  }

  ngOnDestroy() {
    console.log('ngOnDestroyCalled')
  }

}
