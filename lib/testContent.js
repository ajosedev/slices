export default {
  list: [
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
      height: 600,
      source: 'https://source.unsplash.com/random/800x600',
      width: 800,
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
  ],
};
