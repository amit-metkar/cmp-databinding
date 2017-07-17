import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Emulated, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name:  string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
    console.log('constructor called!');
    //console.log("Header test content: "+this.header.nativeElement.textContent); // Errors out, definitely not accessible at this stage
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log("Header test content: "+this.header.nativeElement.textContent); // empty, as element is not initialised at this time
    console.log("Content paragraph: "+this.paragraph.nativeElement.textContent); //empty, as element is not initialised at this time
  }

  ngDoCheck() {
     console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log("Header test content: "+this.header.nativeElement.textContent); // happens after ng-content initiated
    console.log("Content paragraph: "+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log("Header test content: "+this.header.nativeElement.textContent); // Here it is accessible at first time
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
