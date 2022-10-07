import { Container } from "react-bootstrap";
import { useState } from "react";
import ReactFlow, {
    removeElements,
    updateEdge,
    addEdge,
    Background,
    MiniMap,
    Controls
  } from "react-flow-renderer";
import { nodetype } from "./NodeTypes";
import Button from 'react-bootstrap/Button';


const FactoryFlow = () => {
    const [elems, setElements] = useState([]);
    const [name, setName] = useState("");
    const [instance,setInstance] = useState();
    console.log('elems: ',elems)
    const addShop = () => {
        const newShop = {
            id: `${Date.now()}`,
            data: { label: `${name}` },
            type: "square",
            position: {
              x: 0,
              y: 0
            }
          };
        //takes the current newshop data and adds key value id: 
        newShop.data = {...newShop.data, id: `${newShop.id}`};
        setElements((prev) => {
            return [...prev, newShop];
        });
        setName("Test");

    }

    const onLoad = (reactFlowInstance) => {
        setInstance(reactFlowInstance);
        reactFlowInstance.fitView();
        console.log('onload react: ', [reactFlowInstance.getElements()])
      };
    

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
            <ReactFlow
                elements={elems}
                nodeTypes={nodetype}
                onLoad={onLoad}
            >
                <Background variant="dots" gap={15} size={2} color="#c8c8c8" />
                <Controls />
                <MiniMap 
                    nodeColor={(node) => {
                        switch (node.type) {
                          case "rectangle":
                            return "red";
                          case "circle":
                            return "#00ff00";
                          case "triangle":
                            return "rgb(0,0,255)";
                          default:
                            return "#eee";
                        }
                      }}
                />
            </ReactFlow>
            
        </div>
        <div>
            <Button onClick={addShop}>Create Shop Node</Button>{' '}
            <Button>Create Circle Node</Button>{' '}   
            <Button>Create Triangle Node</Button>{' '}
        </div>
        </Container>
        
    );
};

export default FactoryFlow;