import { Component, HostListener, computed, effect, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ArtworkService } from '../../core/services/artwork.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  private artworkService = inject(ArtworkService);
  private router = inject(Router);

  id = input.required<string>();

  private all = this.artworkService.getAll();
  total = this.all.length;

  artwork = computed(() => this.artworkService.getById(Number(this.id())));

  private index = computed(() => this.all.findIndex((a) => a.id === Number(this.id())));
  position = computed(() => this.index() + 1);
  private prevId = computed(() => this.all[(this.index() - 1 + this.total) % this.total].id);
  private nextId = computed(() => this.all[(this.index() + 1) % this.total].id);

  constructor() {
    // Precarica i quadri vicini, così non compaiono a scatti durante l'animazione
    effect(() => {
      for (const id of [this.prevId(), this.nextId()]) {
        const a = this.artworkService.getById(id);
        if (a) new Image().src = a.image;
      }
    });
  }

  avanti() {
    this.vai(this.nextId(), 'avanti');
  }

  indietro() {
    this.vai(this.prevId(), 'indietro');
  }

  private vai(id: number, direzione: 'avanti' | 'indietro') {
    // Il CSS legge questo attributo per scegliere da che lato scivola il quadro
    document.documentElement.dataset['direzione'] = direzione;
    this.router.navigate(['/gallery', id]);
  }

  // ---- Tastiera ----
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (!this.artwork()) return;
    if (e.key === 'ArrowRight') this.avanti();
    if (e.key === 'ArrowLeft') this.indietro();
  }

  // ---- Swipe (solo tocco e penna) ----
  private startX = 0;
  private startY = 0;

  onPointerDown(e: PointerEvent) {
    if (e.pointerType === 'mouse') return;
    this.startX = e.clientX;
    this.startY = e.clientY;
  }

  onPointerUp(e: PointerEvent) {
    if (e.pointerType === 'mouse') return;
    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0) this.avanti();
    else this.indietro();
  }
}