/** @jsx jsx */
import { useRef, useState } from 'react';
import { css, jsx } from '@emotion/core';

import testContent from '../lib/testContent';

import { renderComponent } from '../components/Helpers';

const mainStyles = css`
  display: flex;
  justify-content: center;
  gap: 2rem;

  > * {
    flex: 1 1 0;
  }
`;

const IndexPage = () => {
  const [addingComponent, setAddingComponent] = useState(false);
  const [content, setContent] = useState(testContent);
  // const form = useRef();

  const toggleAddingComponent = () => {
    setAddingComponent(!addingComponent);
  };

  const handleAddComponent = e => {
    e.preventDefault();
    // Convert form to key/value obj
    const fields = Array.from(e.target.childNodes)
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
        {addingComponent && (
          <form onSubmit={handleAddComponent}>
            <input name="children" />
          </form>
        )}
        <button onClick={toggleAddingComponent} type="submit">
          Add component
        </button>
      </div>
      <div>{content.map(comp => renderComponent(comp))}</div>
    </main>
  );
};

export default IndexPage;
