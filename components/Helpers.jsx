import React from 'react';

import Heading from './Heading';
import Text from './Text';

export const componentMap = {
  heading: Heading,
  text: Text,
};

/**
 * Converts ACF field data to React props for a component
 * Should only be necessary if the data returned from GraphQL doesn't match the component props
 * @param {String} componentName - name of the ACF component
 * @param {String} rawFields - JSON string of fields in the ACF component
 */
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
