import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ol className={"grocery-list"}>
                {
                    this.props.groceries.map( (grocery, index) => <GroceryItem
                                                            key={index}
                                                            name={grocery.name}
                                                            count={grocery.count}/> )
                }
            </ol>
        );        
    }
}

export default GroceryList;

// function GroceryList({groceries}) {

//     return (
//         <ol className={"grocery-list"}>
//             {
//                 groceries.map( (grocery, index) => <GroceryItem
//                                                         key={index}
//                                                         name={grocery.name}
//                                                         count={grocery.count}/> )
//             }
//         </ol>
//     );
// }


// function과 class의 차이
// function이면 바로 실행함
// class이면 new를 통해 생성하고, ~~