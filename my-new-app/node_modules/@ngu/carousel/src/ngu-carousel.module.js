import { NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective } from './ngu-carousel.directive';
import { NguItemComponent } from './ngu-item/ngu-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselComponent } from './ngu-carousel/ngu-carousel.component';
import { NguTileComponent } from './ngu-tile/ngu-tile.component';
import { NguCarouselService } from './ngu-carousel.service';
var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
    }
    NguCarouselModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [
                        NguCarouselComponent,
                        NguItemComponent,
                        NguTileComponent,
                        NguCarouselPointDirective,
                        NguCarouselItemDirective,
                        NguCarouselNextDirective,
                        NguCarouselPrevDirective
                    ],
                    declarations: [
                        NguCarouselComponent,
                        NguItemComponent,
                        NguTileComponent,
                        NguCarouselPointDirective,
                        NguCarouselItemDirective,
                        NguCarouselNextDirective,
                        NguCarouselPrevDirective
                    ],
                    providers: [NguCarouselService]
                },] },
    ];
    /** @nocollapse */
    NguCarouselModule.ctorParameters = function () { return []; };
    return NguCarouselModule;
}());
export { NguCarouselModule };
//# sourceMappingURL=ngu-carousel.module.js.map