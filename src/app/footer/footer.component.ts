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
        <p>
          Email:
          <a href="mailto:gil.stettler@students.bfh.ch">gil.stettler&#64;students.bfh.ch</a>
        </p>
        <a href="https://www.linkedin.com/in/gil-colin-stettler-a1a3012b5/"
          ><img src="linkedin.svg" alt="Link zu meinem LinkedIn Profil"
        /></a>
        <a href="https://github.com/gilStettler"
          ><img src="github.svg" alt="Link zu meinem Github Profil"
        /></a>
      </div>

    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
