import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../model/Usuario';
import { CommonModule } from '@angular/common';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgbDropdownModule,
    NgbCollapseModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnDestroy {
  user!: Usuario;
  isMenuCollapsed = true;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getUser();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  closeUserSession() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  isLoggedIn(): boolean {
    if (this.authService.isLoggedIn()) {
      this.user = this.authService.getUser();
      return true;
    }
    return false;
  }
}
