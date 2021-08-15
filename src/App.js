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

function App() {
  // const [loading, setLoading] = useState(false);
  let [completed] = useState(60);
  const creatures_url = 'creatures';

  const dispatch = useDispatch();

  useEffect(() => {
    // setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);

    dispatch(fetchCreatures(BASE_URL + creatures_url));
  }, [dispatch]);

  return (
    <>
      {false ? (
        <LoadingPage completed={completed} />
      ) : (
        <Switch>
          <Route exact path="/" component={MainPage} />
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
