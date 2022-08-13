import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KiyaLoadingInterceptor } from '@kiya/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: KiyaLoadingInterceptor,
            multi   : true
        }
    ]
})
export class KiyaLoadingModule
{
}
