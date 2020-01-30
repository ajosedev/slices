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
      component: 'Text',
      children: 'This is some more text',
    },
    {
      component: 'Button',
      children: 'console.log',
      onClick: console.log,
    },
  ],
};
