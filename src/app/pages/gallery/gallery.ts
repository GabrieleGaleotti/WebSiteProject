import { Component, computed, inject, input } from '@angular/core';
import { ArtworkService } from '../../core/services/artwork.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  private artworkService = inject(ArtworkService);

  id = input.required<string>();

  artwork = computed(() => this.artworkService.getById(Number(this.id())));
}