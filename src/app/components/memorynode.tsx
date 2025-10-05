import { Handle, Position } from "@xyflow/react";
import { Input } from "@/components/ui/input";

export const MemoryNode = () => {
  return (
    <div className="relative bg-white border-2 border-black rounded-xl shadow-md min-w-[200px] max-w-[240px]">
      <Handle
        type="target"
        position={Position.Top}
        id="memory-target"
        isConnectable={true}
        className="!w-2.5 !h-2.5 !border-2 !border-black !bg-white !z-10"
        style={{
          top: -5,
          background: "#fff",
          border: "2px solid #000",
        }}
      />
      <div className="p-2.5 space-y-2">
        <div className="space-y-1.5">
          <h4 className="text-xs font-medium text-gray-600 uppercase tracking-wide">
            Event
          </h4>
          <Input
            className="text-sm h-7 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
            placeholder="Event name"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Details
          </label>
          <textarea
            placeholder="Enter details..."
            className="nodrag w-full p-2 border border-gray-300 rounded-md resize-none
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-200
                     text-xs leading-relaxed bg-gray-50 focus:bg-white"
            rows={3}
          />
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="memory-source"
        isConnectable={true}
        className="!w-2.5 !h-2.5 !border-2 !border-black !bg-white !z-10"
        style={{
          bottom: -5,
          background: "#fff",
          border: "2px solid #000",
        }}
      />
    </div>
  );
};

MemoryNode.displayName = "MemoryNode";
