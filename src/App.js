import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingPage from './pages/Loading.page';
import MainPage from './pages/Main.page';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route exact path="/description/:id" component={DescriptionPage} /> */}
        </Switch>
      )}
    </>
  );
}

export default App;
