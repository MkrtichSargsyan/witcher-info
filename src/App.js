import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoadingPage from './pages/Loading.page';
import MainPage from './pages/Main.page';
import { fetchCreatures } from './store/actions';
import BASE_URL from './api';
import CharactersPage from './pages/Characters.page';
import CreaturesPage from './pages/Creatures.page';
import Layout from './components/Layout';
import DetailPage from './pages/Detail.page';
import Test from './pages/test';

function App() {
  // const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const creatures_url = 'creatures';
  const [count, setCount] = useState(3.7);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setTimeout(() => {
      count > 0 && setCount((count) => count - 1);
    }, 1000);

    setPercent(Math.round(100 - (100 * count) / 3.7)); //counting the percentage for 5 seconds

    dispatch(fetchCreatures(BASE_URL + creatures_url));

    return () => clearInterval(interval);
  }, [count, dispatch]);

  console.log(count);
  return (
    <>
      {percent < 100 ? (
        <LoadingPage completed={percent} />
      ) : (
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Layout>
            <Route exact path="/characters" component={CharactersPage} />
            <Route exact path="/creatures" component={CreaturesPage} />
            <Route exact path="/creatures/:id" component={DetailPage} />
            <Route exact path="/characters/:id" component={DetailPage} />
            {/* <Route exact path="/test" component={Test} /> */}
          </Layout>
        </Switch>
      )}
    </>
  );
}

export default App;
