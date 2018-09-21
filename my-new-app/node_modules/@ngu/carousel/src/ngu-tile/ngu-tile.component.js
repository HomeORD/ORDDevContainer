import { Component, HostBinding } from '@angular/core';
var NguTileComponent = /** @class */ (function () {
    function NguTileComponent() {
        this.classes = true;
    }
    NguTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngu-tile',
                    template: "<div class=\"tile\"><ng-content></ng-content></div>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        padding: 10px;\n        box-sizing: border-box;\n        vertical-align: top;\n    }\n\n    .tile {\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NguTileComponent.ctorParameters = function () { return []; };
    NguTileComponent.propDecorators = {
        'classes': [{ type: HostBinding, args: ['class.item',] },],
    };
    return NguTileComponent;
}());
export { NguTileComponent };
//# sourceMappingURL=ngu-tile.component.js.map