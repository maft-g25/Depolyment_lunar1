import { Fragment } from "react";

function ListGroup() {
    const items = [
        'New York',
        'Tokyo',
        'Paris',
        'London'
    ];

    
    return ( 
        <>
            <h1>List </h1>
             {/* to render Dynamically we use .map function */}

            {/* {items.map(item => <li>{item}</li>) } */}
            {items.map((item) =>(
                 <li key={item}> {item}</li>
            )) }
            
            {/* <ul className="list-group">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul> */}
        </>
    );

}

export default ListGroup;
