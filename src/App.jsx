import { useState } from "react";
import NewsBoard from "./components/NewsBoard";
import Navbar from "./components/navbar";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
