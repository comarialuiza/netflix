import React from 'react';

import useContent from './../../hooks/use-content';
import selectionFilter from './../../utils/selection-filter';
import BrowseContainer from './../../containers/BrowseContainer';

// import { Container } from './styles';

function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = selectionFilter({ series, films });

    return <BrowseContainer slides={ slides }/>;
}

export default Browse;