import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    const [categories, setCategories] = useState([
        'Arcane',
        'League of Legends',
    ]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid category={category} key={category} />
                ))}
            </ol>
        </>
    );
}

export default GifExpertApp;
