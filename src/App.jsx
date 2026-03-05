import Portfolio from './components/Portfolio';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Portfolio />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
