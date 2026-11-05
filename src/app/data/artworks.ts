import { Artwork } from '../models/artwork.model';

export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: 'Quadro di prova 1',
    year: 2023,
    technique: 'Olio su tela',
    dimensions: '50 x 70 cm',
    image: '/artworks/quadro-1.jpeg',
    description: 'Descrizione di prova.',
  },
  {
    id: 2,
    title: 'Quadro di prova 2',
    year: 2022,
    technique: 'Acrilico su tela',
    dimensions: '40 x 40 cm',
    image: '/artworks/quadro-2.jpeg',
  },
  {
    id: 3,
    title: 'Quadro di prova 3',
    year: 2021,
    technique: 'Olio su tavola',
    dimensions: '30 x 40 cm',
    image: '/artworks/quadro-3.jpg',
  },
];
