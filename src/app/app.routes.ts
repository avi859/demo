import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { WelcomeComponent } from './login/welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},

    {path:'home' , children:[

        {
            path:'' , component:HomeComponent,
        },
        {
            path:'productlist' , component:ProductListComponent
        }
        
    ]},

    {path:'about' , component: AboutComponent},
    
    {path:'login' , component: LoginComponent},

    {path:'welcome' , component: WelcomeComponent},

    {path:'contact' , component: ContactComponent},
    
    {path:'details' , component: DetailsComponent}, 
    
    {path:'table' , component: TableComponent},
    
    {path:'products' , children:[
        {
            path:'' , component:ProductsComponent,
        },
        {
            path:'laptop' , component:LaptopComponent,
        },
        {
            path:'mobile' , component:MobileComponent,
        },
        {
            path:'television' , component:TelevisionComponent,
        },
        {
            path:'washingmachine' , component:WashingMachineComponent,
        }
    ]},

    {path: '**' , component: PageNotFoundComponent}
];
