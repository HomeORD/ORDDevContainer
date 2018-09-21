import { Component, HostBinding } from '@angular/core';
var NguItemComponent = /** @class */ (function () {
    function NguItemComponent() {
        this.classes = true;
    }
    NguItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngu-item',
                    template: "<ng-content></ng-content>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        vertical-align: top;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NguItemComponent.ctorParameters = function () { return []; };
    NguItemComponent.propDecorators = {
        'classes': [{ type: HostBinding, args: ['class.item',] },],
    };
    return NguItemComponent;
}());
export { NguItemComponent };
//# sourceMappingURL=ngu-item.component.js.map