import testContent from '../lib/testContent.json';

import { renderComponent } from '../components/Helpers';

const IndexPage = () => {
  return (
    <main>
      Content test
      {testContent.list.map(comp => renderComponent(comp))}
    </main>
  );
};

export default IndexPage;
