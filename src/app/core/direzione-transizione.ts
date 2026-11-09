import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ViewTransitionInfo } from '@angular/router';
import { ArtworkService } from './services/artwork.service';

// Scende fino alla rotta più interna e, se è 'gallery/:id', restituisce l'id del quadro
function idQuadro(rotta: ActivatedRouteSnapshot): number | null {
  let r = rotta;
  while (r.firstChild) r = r.firstChild;
  return r.routeConfig?.path === 'gallery/:id' ? Number(r.params['id']) : null;
}

// Chiamata da Angular a ogni View Transition (anche col tasto indietro del browser).
// Scrive su <html> la direzione che styles.css usa per scegliere l'animazione del quadro.
export function impostaDirezione({ from, to }: ViewTransitionInfo): void {
  const html = document.documentElement;
  const quadri = inject(ArtworkService).getAll();
  const n = quadri.length;

  const idDa = idQuadro(from);
  const idA = idQuadro(to);
  const da = quadri.findIndex((q) => q.id === idDa);
  const a = quadri.findIndex((q) => q.id === idA);

  // Non è un passaggio tra due quadri diversi: dissolvenza normale
  if (da === -1 || a === -1 || da === a) {
    delete html.dataset['direzione'];
    return;
  }

  const passiAvanti = (a - da + n) % n;
  if (passiAvanti === 1) {
    html.dataset['direzione'] = 'avanti';
  } else if (passiAvanti === n - 1) {
    html.dataset['direzione'] = 'indietro';
  } else {
    // Salto di più quadri (es. indirizzo scritto a mano): decide l'ordine
    html.dataset['direzione'] = a > da ? 'avanti' : 'indietro';
  }
}