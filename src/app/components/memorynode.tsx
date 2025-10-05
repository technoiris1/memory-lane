// memorynode.tsx
import { useCallback, ChangeEvent, memo } from "react";
import { Handle, Position, type NodeProps, useReactFlow } from "@xyflow/react";

interface MemoryNodeData {
  text?: string;
  label?: string;
}

export const MemoryNode = memo(
  ({ id, data, isConnectable }: NodeProps<MemoryNodeData>) => {
    const { setNodes } = useReactFlow();

    const handleChange = useCallback(
      (evt: ChangeEvent<HTMLInputElement>) => {
        const newValue = evt.target.value;
        setNodes((nodes) =>
          nodes.map((node) => {
            if (node.id === id) {
              return {
                ...node,
                data: {
                  ...node.data,
                  text: newValue,
                },
              };
            }
            return node;
          }),
        );
      },
      [id, setNodes],
    );

    return (
      <div className="memory-node">
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />

        <div>
          <label htmlFor={`memory-input-${id}`}>Memory Node</label>
          <input
            id={`memory-input-${id}`}
            name="text"
            value={data?.text || ""}
            onChange={handleChange}
            className="nodrag"
            placeholder="Enter memory..."
            autoComplete="off"
          />
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
