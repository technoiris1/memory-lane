"use client";
import {
  ReactFlow,
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  ConnectionMode,
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback } from "react";

const initialNodes: Node[] = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
    type: "input",
  },
  {
    id: "n2",
    position: { x: 200, y: 100 },
    data: { label: "Node 2" },
    type: "default",
  },
  {
    id: "n3",
    position: { x: 400, y: 200 },
    data: { label: "Node 3" },
    type: "output",
  },
];

const initialEdges: Edge[] = [];

export default function Playground() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onConnect: OnConnect = useCallback((params) => {
    console.log("Connection created:", params);
    setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot));
  }, []);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
        defaultEdgeOptions={{
          type: "default",
          animated: false,
        }}
        proOptions={{ hideAttribution: true }}
      >
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
