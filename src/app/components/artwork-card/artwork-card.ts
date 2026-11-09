import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Artwork } from '../../models/artwork.model';

@Component({
  selector: 'app-artwork-card',
  imports: [RouterLink],
  templateUrl: './artwork-card.html',
  styleUrl: './artwork-card.css',
})
export class ArtworkCard {
  artwork = input.required<Artwork>();
}