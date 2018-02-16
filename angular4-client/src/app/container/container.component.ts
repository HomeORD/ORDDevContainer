import { Component, OnInit, Input,OnChanges, ElementRef,HostListener } from '@angular/core';
import {SectionComponent} from '../section/section.component';

@Component({
    selector: 'container',
    templateUrl: 'container/container.component.html',
    styleUrls: ['container/container.component.css']
})
export class ContainerComponent implements OnInit {

    private currentSectionName: string = null;
    private sectionsIndex: any = [];  
    @Input()  sections: any;


    constructor( private el: ElementRef) { }

    ngOnInit() {
    }

    sectionPosition($event) {
        //filter out the old position if it has been set
        this.sectionsIndex = this.sectionsIndex.filter(item => item.name != $event.name);
        //set the new position
        this.sectionsIndex.push($event);
        //sort the section based on their apperance order 
        this.sectionsIndex.sort((a: any, b: any) => {
            return b.position - a.position;
        });

        //if the page has already been scrolled find the current name
        if (document.body.scrollTop > 0) {
            this.currentSectionName = this.getCurrentSectionName();
        }
    }


    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.currentSectionName = this.getCurrentSectionName();
    }

    private getCurrentSectionName(): string {
        let offset: number = this.el.nativeElement.parentElement.offsetTop - this.el.nativeElement.offsetTop;
        for (let section of this.sectionsIndex) {
            //Note: 13px is the margin-top value of the h2 element in the header
            if ((section.position + offset - window.scrollY - 13) < 0) {
                return section.name;
            }
        }
        return null;
    }
}