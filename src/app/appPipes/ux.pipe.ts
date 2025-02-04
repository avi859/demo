import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'uxpipe'
})

export class UxPipe implements PipeTransform{

    // transform(value: any ) {

    //     if(value.length > 7){
    //          return value + ' ...'
    //     }else{
    //         return value;
    //     }
    // }
    transform(value: any , limit:number ) {
        if(value.length > limit){
            return value + ' ...'
        }else{
            return value;
        }
    }

}