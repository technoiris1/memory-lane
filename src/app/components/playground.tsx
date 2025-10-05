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
  type NodeTypes,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback } from "react";
import { MemoryNode } from "./memorynode";
type MemoryNodeData = {
  text?: string;
  label?: string;
};
type MemoryNodeType = Node<MemoryNodeData, "memorynode">;
type AppNode = MemoryNodeType | Node;

const initialNodes: AppNode[] = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
    type: "memorynode",
  },
  {
    id: "n3",
    position: { x: 400, y: 200 },
    data: { text: "Initial text", label: "Node 3" },
    type: "memorynode",
  },
];

const initialEdges: Edge[] = [];

const nodeTypes: NodeTypes = {
  memorynode: MemoryNode,
};

export default function Playground() {
  const [nodes, setNodes] = useState<AppNode[]>(initialNodes);
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
        nodeTypes={nodeTypes}
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
