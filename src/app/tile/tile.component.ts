import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tile" [ngStyle]="{ 'background-color': color }">
      <div>
        <h1>{{ label }}</h1>
    </div>
  `,
  styleUrl: './tile.component.scss'
})
export class TileComponent {
  @Input() label!: string;
  @Input() color!: string;

}
