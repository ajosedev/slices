/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';

import testContent from '../lib/testContent';

import FormInput from '../components/FormInput';
import {
  AllComponents,
  ComponentProps,
  renderComponent,
} from '../components/Helpers';

const mainStyles = css`
  display: flex;
  justify-content: center;
  gap: 2rem;

  > * {
    flex: 1 1 0;
  }
`;

const IndexPage = () => {
  const [addingComponent, setAddingComponent] = useState(null);
  const [content, setContent] = useState(testContent);
  const [newComponent, setNewComponent] = useState('Text');

  const toggleAddingComponent = e => {
    e.preventDefault();

    setAddingComponent(newComponent);
  };

  const handleAddComponent = e => {
    e.preventDefault();
    // Convert form to key/value obj
    const fields = Array.from(e.target.querySelectorAll('input'))
      .filter(el => el.name)
      .reduce(
        (form, el) => ({
          ...form,
          [el.name]: el.value,
        }),
        {},
      );

    const newContent = content.concat({
      component: newComponent,
      ...fields,
    });
    setContent(newContent);

    setAddingComponent(null);
  };

  return (
    <main css={mainStyles}>
      <div>
        <pre>
          <code>{JSON.stringify(content, null, 2)}</code>
        </pre>
        {addingComponent ? (
          <form onSubmit={handleAddComponent}>
            {Object.entries(ComponentProps[addingComponent]).map(
              ([label, type]) => (
                <FormInput key={label} label={label} type={type} />
              ),
            )}
            <button type="submit">Add</button>
          </form>
        ) : (
          <form onSubmit={toggleAddingComponent}>
            <select
              value={newComponent}
              onChange={e => setNewComponent(e.target.value)}
            >
              {AllComponents.map(component => (
                <option key={component} value={component}>
                  {component}
                </option>
              ))}
            </select>
            <button onClick={toggleAddingComponent} type="submit">
              {`Add ${newComponent}`}
            </button>
          </form>
        )}
      </div>
      <div>{content.map(comp => renderComponent(comp))}</div>
    </main>
  );
};

export default IndexPage;
