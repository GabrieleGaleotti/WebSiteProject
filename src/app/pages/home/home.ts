import { Component, inject } from '@angular/core';
import { ArtworkCard } from '../../components/artwork-card/artwork-card';
import { ArtworkService } from '../../core/services/artwork.service';

@Component({
  imports: [ArtworkCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private artworkService = inject(ArtworkService);

  artworks = this.artworkService.getAll();
}