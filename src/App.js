import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideMenu';
import Payments from './components/Payments';
import Header from './components/Header';
//verifying git reconfig
function App() {
  return (
    <div className="flex font-roboto">      
      <div className="bg-[#1E2640] h-screen">
        <SideBar />
      </div>
      <div className="bg-[#FAFAFA] flex flex-col w-full overflow-x-auto">
        <div className="w-full relative">
          <Header />
        </div>
        <div className="w-full overflow-y-scroll" style={{ height: 'calc(100vh)' }}>
          <Payments />
        </div>
      </div>
    </div>
  );
}

export default App;
