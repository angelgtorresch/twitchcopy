import NavBar from './components/Navbar';
import Content from './components/Content'
import Aside from './components/Aside';

export default function App() {
    return (
    <main className="w-full min-h-screen grid grid-cols-[20%_1fr] grid-rows-[3rem_1fr]">
      <NavBar />
      <div >
        <Aside />
      </div>
      <div>
        <Content />
      </div>
       
    </main>
        
    )
}
