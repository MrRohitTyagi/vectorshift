import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useStore } from "./store";

function App() {
  const { edges, nodes } = useStore();
  console.log(`%c {edges,nodes} `, "color: orange;border:2px solid cyan", {
    edges,
    nodes,
  });
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
