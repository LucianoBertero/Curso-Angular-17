import { Component } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { User } from '../../../auth/interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list',
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new-hero',
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search',
    },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/auth']);
  }
}
