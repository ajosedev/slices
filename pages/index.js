import testContent from '../lib/testContent';

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
