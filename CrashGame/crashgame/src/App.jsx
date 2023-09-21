import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CrashGame from './CrashGame';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CrashGame} />
      </Switch>
    </Router>
  );
}

export default App;