import { Injectable } from '@angular/core';
import { Artwork } from '../../models/artwork.model';
import { ARTWORKS } from '../../data/artworks';

@Injectable({ providedIn: 'root' })
export class ArtworkService {
  private readonly artworks: Artwork[] = ARTWORKS;

  getAll(): Artwork[] {
    return this.artworks;
  }

  getById(id: number): Artwork | undefined {
    return this.artworks.find((artwork) => artwork.id === id);
  }
}