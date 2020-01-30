/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';

import testContent from '../lib/testContent';

import { renderComponent } from '../components/Helpers';

const mainStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > * {
    flex: 1 1 0;
  }
`;

const IndexPage = () => {
  const [content, setContent] = useState(testContent);

  const handleAddComponent = () => {
    const newContent = content.concat({
      component: 'Text',
      children: 'Extra added text',
    });
    setContent(newContent);
  };

  return (
    <main css={mainStyles}>
      <div>
        <pre>
          <code>{JSON.stringify(content, null, 2)}</code>
        </pre>
        <button onClick={handleAddComponent} type="submit">
          Add text
        </button>
      </div>
      <div>{content.map(comp => renderComponent(comp))}</div>
    </main>
  );
};

export default IndexPage;
