import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([...new Map(items.map(item => [item["category"], item])).values()]);

    const filterItems = (category) => {
        console.log(items);
        if (category === "all") {
            setMenuItems(items);
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return ( <
        main >
        <
        section className = 'manu section' >
        <
        div className = 'title' >
        <
        h2 > Our menu < /h2> <
        div className = 'underline' / >
        <
        /div> <
        Categories filterItems = { filterItems }
        categories = { categories }
        /> <
        Menu items = { menuItems }
        /> <
        /section> <
        /main>
    );
}

export default App;