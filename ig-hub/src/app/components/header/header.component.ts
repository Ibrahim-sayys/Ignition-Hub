import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onLogout() {
    // Clear login status and other admin-specific data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminData'); // Optional: Clear admin data if stored
    this.router.navigate(['/admin-login']); // Redirect to Admin Login page
  }
}
