import DraggableBlocksList from "./DraggableBlocksList";
import DraggableBlocksList2 from "./DraggableBlocksListNoLibrary";
import DraggableBlocksListDnD from "./DraggableBlocksListDnD";

function App() {
  return (
    <>
      <DraggableBlocksList2 />
      <DraggableBlocksListDnD />
      <DraggableBlocksList />
    </>
  );
}

export default App;
