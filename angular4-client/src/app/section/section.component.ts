import {Component, OnInit, ElementRef, Output, EventEmitter, HostListener,Input} from '@angular/core';


@Component({
    selector: 'section',
    templateUrl: 'section/section.component.html',
    styleUrls: ['section/section.component.css']
  
})
export class SectionComponent implements OnInit {

    @Output() sectionPosition = new EventEmitter();
    @Input()  section:  any;

    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.sectionPosition.emit({ name: this.section.name, position: this.element.nativeElement.offsetTop });
    }


    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.sectionPosition.emit({ name: this.section.name, position: this.element.nativeElement.offsetTop });
    }

}