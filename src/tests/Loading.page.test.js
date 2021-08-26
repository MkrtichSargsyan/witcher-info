import renderer from 'react-test-renderer';
import LoadingPage from '../pages/Loading.page';

it('expects to render the loading page', () => {
  const result = renderer.create(<LoadingPage completed={81} />).toJSON;
  expect(result).toMatchSnapshot();
});
