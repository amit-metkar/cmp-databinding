import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Emulated, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name:  string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
    console.log('constructor ---- constructor called!');
    // console.log("Header test content: "+this.header.nativeElement.textContent); // Errors out, definitely not accessible at this stage
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ---- ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit ---- ngOnInit called!');
    // empty, as element is not initialised at this time
    console.log('ngOnInit ---- Header test content: '+this.header.nativeElement.textContent); 
    // empty, as element is not initialised at this time
    console.log('ngOnInit ---- Content paragraph: ' +this.paragraph.nativeElement.textContent); 
  }
  ngDoCheck() {
     console.log('ngDoCheck ---- ngDoCheck called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit ---- ngAfterContentInit called!');
    // happens after ng-content initiated
    console.log('ngAfterContentInit ---- Header test content: ' + this.header.nativeElement.textContent); 
    console.log('ngAfterContentInit ---- Content paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked ---- AfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit ---- ngAfterViewInit called!');
    // Here it is accessible at first time
    console.log('ngAfterViewInit ---- Header test content: ' + this.header.nativeElement.textContent); 
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked ---- ngAfterViewChecked called!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy ---- ngOnDestroy called!');
  }
}
