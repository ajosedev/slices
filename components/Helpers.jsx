import React from 'react';

// import Button from './Button';
import Heading from './Heading';
import Image from './Image';
import Line from './Line';
import Text from './Text';

const ComponentMap = {
  // button: Button,
  Heading: {
    component: Heading,
    props: {
      content: 'text',
      level: 'number',
    },
  },
  Image: {
    component: Image,
    props: {
      alt: 'text',
      height: 'number',
      source: 'text',
      width: 'number',
    },
  },
  Line: {
    component: Line,
  },
  Text: {
    component: Text,
    props: {
      content: 'text',
    },
  },
};

export const ComponentProps = Object.entries(ComponentMap).reduce(
  (acc, [componentName, component]) => {
    acc[componentName] = component.props;

    return acc;
  },
  {},
);

export const AllComponents = Object.keys(ComponentMap);

const components = Object.entries(ComponentMap).reduce(
  (acc, [componentName, component]) => {
    acc[componentName] = component.component;

    return acc;
  },
  {},
);

export const renderComponent = ({ component, ...props }) => {
  const Component = components[component];

  if (!Component) {
    throw new Error(`No component found for ${component}`);
  }

  return <Component {...props} />;
};

renderComponent.propTypes = {
  component: Object.keys(ComponentMap).isRequired,
};

export default renderComponent;
