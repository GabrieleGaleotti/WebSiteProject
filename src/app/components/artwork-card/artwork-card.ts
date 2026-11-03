import { Component, input } from '@angular/core';
import { Artwork } from '../../models/artwork.model';

@Component({
  selector: 'app-artwork-card',
  imports: [],
  templateUrl: './artwork-card.html',
  styleUrl: './artwork-card.css',
})
export class ArtworkCard {
  artwork = input.required<Artwork>();
}