export default [
  {
    component: 'Heading',
    children: 'This is a h1',
    level: 1,
  },
  {
    component: 'Text',
    children: 'This is some text',
  },
  {
    component: 'Line',
  },
  {
    component: 'Image',
    alt: 'Random Unsplash image',
    height: 200,
    source: 'https://source.unsplash.com/random/400x200',
    width: 400,
  },
  {
    component: 'Text',
    children: 'Above is a random Unsplash image',
  },
  {
    component: 'Line',
  },
  {
    component: 'Button',
    children: 'console.log',
    onClick: console.log,
  },
];
