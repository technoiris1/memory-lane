import { memo } from "react";
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";

type MemoryNodeData = {
  text?: string;
  label?: string;
};
type MemoryNodeType = Node<MemoryNodeData, "memorynode">;
export const MemoryNode = memo(
  ({ id, data, isConnectable }: NodeProps<MemoryNodeType>) => {
    return (
      <div className="memory-node">
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />

        <div className="memory-node-content">
          <div className="memory-node-label">{data.label || "Memory Node"}</div>

          <div className="memory-node-text">
            <textarea
              value={data.text || ""}
              onChange={(e) => {
                console.log("Text changed:", e.target.value);
              }}
              placeholder="Enter memory text..."
              className="nodrag"
              rows={3}
            />
          </div>
        </div>

        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
      </div>
    );
  },
);

MemoryNode.displayName = "MemoryNode";
