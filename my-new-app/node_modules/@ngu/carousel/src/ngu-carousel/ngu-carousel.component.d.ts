import { ElementRef, Renderer2, OnInit, OnDestroy, AfterContentInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { NguCarouselStore } from './ngu-carousel.interface';
import { NguCarouselService } from './../ngu-carousel.service';
export declare class NguCarouselComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
    private el;
    private renderer;
    private carouselSer;
    private platformId;
    styleSelector: string;
    private carouselSerSub;
    private directionSym;
    private itemsSubscribe;
    private carouselCssNode;
    private pointIndex;
    private withAnim;
    pointers: number;
    private userData;
    private reseter;
    private carouselLoad;
    private onMove;
    private initData;
    private items;
    private points;
    private next;
    private prev;
    private carouselMain1;
    private carouselInner1;
    private carousel1;
    private pointMain;
    private forTouch;
    private leftBtn;
    private rightBtn;
    private evtValue;
    private pauseCarousel;
    private pauseInterval;
    private carousel;
    private carouselMain;
    private carouselInner;
    private onResize;
    private onScrolling;
    private carouselInt;
    private Arr1;
    pointNumbers: Array<any>;
    data: NguCarouselStore;
    listener1: any;
    listener2: any;
    listener3: any;
    listener4: any;
    listener5: any;
    listener6: any;
    listener7: any;
    listener8: any;
    constructor(el: ElementRef, renderer: Renderer2, carouselSer: NguCarouselService, platformId: Object);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private onResizing(event);
    /** Get Touch input */
    private touch();
    /** handle touch input */
    private touchHandling(e, ev);
    /** this used to disable the scroll when it is not on the display */
    private onWindowScrolling();
    /** store data based on width of the screen for the carousel */
    private storeCarouselData();
    /** Used to reset the carousel */
    reset(): void;
    /** Init carousel point */
    private carouselPoint();
    /** change the active point in carousel */
    private carouselPointActiver();
    /** this function is used to scoll the carousel when point is clicked */
    moveTo(index: number): void;
    /** set the style of the carousel based the inputs data */
    private carouselSize();
    /** logic to scroll the carousel step 1 */
    private carouselScrollOne(Btn);
    /** logic to scroll the carousel step 2 */
    private carouselScrollTwo(Btn, currentSlide, itemSpeed);
    /** boolean function for making isFirst and isLast */
    private btnBoolean(first, last);
    private transformString(grid, slide);
    /** set the transform style to scroll the carousel  */
    private transformStyle(slide);
    /** this will trigger the carousel to load the items */
    private carouselLoadTrigger();
    /** generate Class for each carousel to set specific style */
    private generateID();
    /** handle the auto slide */
    private carouselInterval();
    /** pause interval for specific time */
    private carouselIntervalEvent(ev);
    /** animate the carousel items */
    private carouselAnimator(direction, start, end, speed, length);
    /** control button for loop */
    private buttonControl();
    /** Short form for setElementStyle */
    private setStyle(el, prop, val);
    /** For generating style tag */
    private createStyleElem(datas?);
}
