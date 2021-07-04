const diagram = docuemnt.getElementById('myDiagramDiv');

const init = () =>{

    let $ = go.GraphObject.make;
    let myDiagram = $(go.Diagram, diagram);
    console.log(myDiagram)
}

export default init;
