/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoadingPage from './pages/Loading.page';
import MainPage from './pages/Main.page';
import { fetchCreatures, fetchCharacters } from './store/actions';
import CharactersPage from './pages/Characters.page';
import CreaturesPage from './pages/Creatures.page';
import Layout from './components/Layout';
import DetailPage from './pages/Detail.page';

function App() {
  const [percent, setPercent] = useState(0);
  const [count, setCount] = useState(3.7);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setTimeout(() => {
      count > 0 && setCount((count) => count - 1);
    }, 1000);

    setPercent(Math.round(100 - (100 * count) / 3.7)); // counting the percentage for 3.7 seconds

    dispatch(
      fetchCreatures(
        'https://determined-ritchie-1e224a.netlify.app/.netlify/functions/getCreatures',
      ),
    );
    dispatch(
      fetchCharacters(
        'https://determined-ritchie-1e224a.netlify.app/.netlify/functions/getCharacters',
      ),
    );
    return () => clearInterval(interval);
  }, [count, dispatch]);

  return (
    <>
      {percent < 100 ? (
        <LoadingPage completed={percent} />
      ) : (
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/creatures/:id" component={DetailPage} />
          <Route exact path="/characters/:id" component={DetailPage} />
          <Layout>
            <Route exact path="/characters" component={CharactersPage} />
            <Route exact path="/creatures" component={CreaturesPage} />
          </Layout>
        </Switch>
      )}
    </>
  );
}

export default App;
