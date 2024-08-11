import Header from "./components/Header";
import Content from "./components/Content";
import { TodoProvider } from "./contexts/TodoContext";


function App() {
  return (
    <TodoProvider>
    <section className="todoapp">
      <Header />
      <Content />
    </section>
    </TodoProvider>
  );
}

export default App;
