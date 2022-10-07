import { Handle } from "react-flow-renderer";

const ShopNode = ({ data }) => {
    return (
      <div style={{ background: "black", padding: "14px" }}>
        <Handle
          type="target"
          position="left"
          id={`${data.id}.left`}
          style={{ borderRadius: 0 }}
        />
        <div id={data.id}>{data.label}</div>
        <Handle
          type="source"
          position="right"
          id={`${data.id}.right1`}
          style={{ top: "30%", borderRadius: 0 }}
        />
        <Handle
          type="source"
          position="right"
          id={`${data.id}.right2`}
          style={{ top: "70%", borderRadius: 0 }}
        />
      </div>
    );
    };
export const nodetype = {
    square: ShopNode
};