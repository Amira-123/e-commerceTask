
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
    loadChildren:()=>
    import('./products/products.module').then(m=>m.ProductsModule)
  },
  {path:'about',
    loadChildren:()=>
    import('./about/about.module').then(m=>m.AboutModule)
  },
  {path:'portfolio',
    loadChildren:()=>
    import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)
  },
  {path:'team',
    loadChildren:()=>
    import('./team/team.module').then(m=>m.TeamModule)
  },
  {path:'contact',
    loadChildren:()=>
    import('./contact/contact.module').then(m=>m.ContactModule)
  },
  {path:'**',redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
