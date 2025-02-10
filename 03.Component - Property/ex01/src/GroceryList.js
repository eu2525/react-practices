import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList(props) {
    return (
        <ol class="grocery-list">
            <GroceryItem name = {'Bread'} count = {10}/>
            <GroceryItem name = {'Coffee'} count = {12}/>
            <GroceryItem name = {'Milk'} count = {20}/>
            <GroceryItem name = {'Egg'} count = {50}/>
            <GroceryItem name = {'Cake'} count = {30}/>
        </ol>
    );
}

export default GroceryList;