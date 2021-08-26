/* eslint-disable no-unused-vars */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import DetailPage from '../pages/Detail.page';
import store from '../store/configureStore';

const location = {
  pathname: '/creatures/41',
  search: '',
  hash: '',
  state: { itemsType: 'creatures' },
  key: 'p65h2z',
};

it('expect to render DetailPage component', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage location={location} />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
