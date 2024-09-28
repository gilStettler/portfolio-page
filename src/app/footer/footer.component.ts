import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer>
      <div class="footer-contact">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:your-email@example.com">gilste2000&#64;gmail.com</a></p>
        <a href="https://www.linkedin.com/in/gil-colin-stettler-a1a3012b5/"><img src="linkedin.svg" alt="Link zu meinem LinkedIn Profil"></a>
        <a href="https://github.com/gilStettler"><img src="github.svg" alt="Link zu meinem Github Profil"></a>
      </div>
      <div class="footer-rights">
        <p>&copy; 2024 Gil Stettler. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Implement your email sending logic here
      console.log('Form Submitted', this.contact);
      // Reset form after submission
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
    }
  }

}
