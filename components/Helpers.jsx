import React from 'react';

// import Button from './Button';
import Heading from './Heading';
import Image from './Image';
import Line from './Line';
import Text from './Text';

export const ComponentMap = {
  // button: Button,
  heading: Heading,
  image: Image,
  line: Line,
  text: Text,
};

// A list of components and which
export const ComponentProps = {
  Text: {
    content: 'text',
  },
};

export const renderComponent = ({ component, ...props }) => {
  const comp = component.toLowerCase();

  const Component = ComponentMap[comp];

  if (!Component) {
    throw new Error(`No component found for ${comp}`);
  }

  return <Component {...props} />;
};

renderComponent.propTypes = {
  component: Object.keys(ComponentMap).isRequired,
};

export default renderComponent;
