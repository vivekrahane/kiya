import { NgModule } from '@angular/core';
import { KiyaFindByKeyPipe } from '@kiya/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        KiyaFindByKeyPipe
    ],
    exports     : [
        KiyaFindByKeyPipe
    ]
})
export class KiyaFindByKeyPipeModule
{
}
