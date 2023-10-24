import React from 'react';
import SimpleButton from '../Buttons/SimpleButton';

// Let's say we have some saloons to map into cards, just mocks for example
const saloons = [1, 2, 3, 4, 5, 6];

const SaloonCard = (): JSX.Element => {
    return <div>
        {saloons.map(saloon => saloon)}
        <SimpleButton/>
    </div>;
};

export default SaloonCard