import React from 'react';

import Button from './Button';
import Heading from './Heading';
import Line from './Line';
import Text from './Text';

export const componentMap = {
  button: Button,
  heading: Heading,
  line: Line,
  text: Text,
};

// const propMapper = (componentName, fields) => {
//   switch (componentName) {
//     case 'text':
//       return {
//         children: fields.text,
//       };

//     default:
//       return fields;
//   }
// };

export const renderComponent = ({ component, ...props }) => {
  const comp = component.toLowerCase();
  // const props = propMapper(comp, rest);

  const Component = componentMap[comp];

  if (!Component) {
    throw new Error(`No component found for ${comp}`);
  }

  return <Component {...props} />;
};

renderComponent.propTypes = {
  component: Object.keys(componentMap).isRequired,
};

export default renderComponent;
