import Header from './Header';
import Menu from './Menu';
import Main from './Maiin';

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <Menu />
        <Main />
      </div>
    </div>
  );
}