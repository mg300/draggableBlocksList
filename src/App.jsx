import DraggableBlocksList from "./DraggableBlocksList";
import DraggableBlocksListNoLibrary from "./DraggableBlocksListNoLibrary";
import DraggableBlocksListDnD from "./DraggableBlocksListDnD";
import styled from "styled-components";
const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;
`;
function App() {
  return (
    <Panel>
      <DraggableBlocksListNoLibrary />
      <DraggableBlocksListDnD />
      <DraggableBlocksList />
    </Panel>
  );
}

export default App;
