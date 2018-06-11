
import { Component } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.component.html',

})

export class DropdownComponent {

    public isOpenChange(): void { console.log('isOpenChange triggered!'); }

    public onHidden(): void { console.log('onHidden triggered!'); }

    public onShown(): void { console.log('OnShown triggered!'); }

}
        