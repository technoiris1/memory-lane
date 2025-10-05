import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
const initialNodes = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
    type: "input",
  },
  {
    id: "n2",
    position: { x: 100, y: 100 },
    data: { label: "Node 2" },
  },
];
export default function Playground() {
  return (
    <div className="h-full w-full">
      <ReactFlow nodes={initialNodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
