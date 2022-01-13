import { Sidebar, Feed } from '../';

const App = () => {
    return (
        <div className="App prose h-screen max-w-full bg-background flex flex-row font-Inter">
            <Sidebar />
            <Feed />
        </div>
    )
}
export default App;