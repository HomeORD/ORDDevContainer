export declare class NguCarouselStore {
    type: string;
    deviceType: DeviceType;
    token: string;
    items: number;
    load: number;
    deviceWidth: number;
    carouselWidth: number;
    itemWidth: number;
    visibleItems: ItemsControl;
    slideItems: number;
    itemWidthPer: number;
    itemLength: number;
    currentSlide: number;
    easing: string;
    speed: number;
    transform: Transfrom;
    loop: boolean;
    dexVal: number;
    touchTransform: number;
    touch: Touch;
    isEnd: boolean;
    isFirst: boolean;
    isLast: boolean;
    RTL: boolean;
    button: NguButton;
    point: boolean;
    vertical: Vertical;
}
export declare type DeviceType = 'xs' | 'sm' | 'md' | 'lg' | 'all';
export declare type ButtonVisible = 'disabled' | 'hide';
export declare class ItemsControl {
    start: number;
    end: number;
}
export declare class Vertical {
    enabled: boolean;
    height: number;
}
export declare class NguButton {
    visibility?: ButtonVisible;
    elastic?: number;
}
export declare class Touch {
    active?: boolean;
    swipe: string;
    velocity: number;
}
export declare class Transfrom {
    [key: string]: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    all: number;
}
export declare class NguCarousel {
    grid: Transfrom;
    slide?: number;
    speed?: number;
    interval?: number;
    animation?: Animate;
    point?: Point;
    type?: string;
    load?: number;
    custom?: Custom;
    loop?: boolean;
    touch?: boolean;
    easing?: string;
    RTL?: boolean;
    button?: NguButton;
    vertical?: Vertical;
}
export declare type Custom = 'banner';
export declare type Animate = 'lazy';
export interface Point {
    visible: boolean;
    pointStyles?: string;
    hideOnSingleSlide?: boolean;
}
export interface Animation {
    type?: Animate;
    animateStyles?: AnimationStyles;
}
export interface AnimationStyles {
    style?: string;
    open?: string;
    close?: string;
    stagger?: number;
}
