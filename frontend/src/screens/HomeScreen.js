import React from 'react';
import Results from '../components/Results'

function HomeScreen({genre}) {

    console.log(genre);

    return (
        <div>
            <Results genre={genre} />           
        </div>
    )
}

export default HomeScreen;
