import NavBar from './components/navbar';
import './static/global.css'
import Main from 'pages/Main/Index';
import { styled } from 'styled-components';
import About from 'pages/About/Index';
import Project from 'pages/Project/Index';
import Contact from 'pages/Contact/Index';

export const AppContainer = styled.body`
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Main />
      <About />
      <Project />
      <Contact />
    </AppContainer>
  );
}

export default App;
