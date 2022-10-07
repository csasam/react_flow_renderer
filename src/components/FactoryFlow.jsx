import { Container } from "react-bootstrap";
import ReactFlow, {
    removeElements,
    updateEdge,
    addEdge,
    Background,
    MiniMap,
    Controls
  } from "react-flow-renderer";


const FactoryFlow = () => {
     
    return (
        <Container>
            <div
            style={{
                height: "75vh",
                width: "90vw",
                border: "1px solid black"
                //,marginLeft: "1vw"
          }}
        >
            <ReactFlow>
                <Background variant="dots" gap={15} size={2} color="#c8c8c8" />
                <Controls />
            </ReactFlow>
            
        </div>
        </Container>
        
    );
};

export default FactoryFlow;