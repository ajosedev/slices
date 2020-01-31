/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';

import testContent from '../lib/testContent';

import { ComponentProps, renderComponent } from '../components/Helpers';

const mainStyles = css`
  display: flex;
  justify-content: center;
  gap: 2rem;

  > * {
    flex: 1 1 0;
  }
`;

const FormInput = props => {
  const { label, type } = props;

  return (
    <label data-type="input">
      <p>{label}</p>
      <input name={label} type={type} />
    </label>
  );
};

const IndexPage = () => {
  const [addingComponent, setAddingComponent] = useState(null);
  const [content, setContent] = useState(testContent);
  // const form = useRef();

  const toggleAddingComponent = component => {
    if (addingComponent) {
      setAddingComponent(null);
    } else {
      setAddingComponent(component);
    }
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
      component: 'Text',
      ...fields,
    });
    setContent(newContent);

    toggleAddingComponent();
  };

  return (
    <main css={mainStyles}>
      <div>
        <pre>
          <code>{JSON.stringify(content, null, 2)}</code>
        </pre>
        {addingComponent ? (
          <form onSubmit={handleAddComponent}>
            {Object.entries(ComponentProps[addingComponent]).map(([label, type]) => (
              <FormInput label={label} type={type} />
            ))}
            <button type="submit">Add</button>
          </form>
        ) : (
          <button onClick={() => toggleAddingComponent('Text')} type="submit">
            Add Text
          </button>
        )}
      </div>
      <div>{content.map(comp => renderComponent(comp))}</div>
    </main>
  );
};

export default IndexPage;
