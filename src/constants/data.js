import images from './images';

const wines = [
  {
    title: 'Três Castelos Tinto',
    price: 'R$40',
    tags: 'PT | Garrafa',
  },
  {
    title: 'Torre de Pias Vinho Tinto',
    price: 'R$50',
    tags: 'PT | Garrafa',
  },
  {
    title: 'Travessia Branco 2020',
    price: 'R$40',
    tags: 'PT | Garrafa',
  },
  {
    title: 'Torre de Pias Vinho Branco',
    price: 'R$61',
    tags: 'PT | Garrafa',
  },
  {
    title: 'Portada Reserva Vinho Regional Lisboa 2020',
    price: 'R$90',
    tags: 'PT | Garrafa',
  },
];

const cocktails = [
  {
    title: 'Caipirinha',
    price: 'R$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Cosmopolitan",
    price: 'R$26',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Martini',
    price: '$16',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Negroni',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Piña Colada',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Português',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Estrela em ascensão',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitalidade',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef Renomeado',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
