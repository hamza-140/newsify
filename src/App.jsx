import NewsWithButtons from "./NewsWithButtons";
import NewsWithInfiniteScroll from "./NewsWithInfiniteScroll";
import Navbar from "./Navbar";



function App() {

  return (
    <div className="bg-gray-600 min-h-screen">
      <Navbar/>
      {/* OPTION 1 */}
      <NewsWithButtons/>
      {/* OPTION 2 */}
      <NewsWithInfiniteScroll/>
    </div>
  );
}

export default App;
