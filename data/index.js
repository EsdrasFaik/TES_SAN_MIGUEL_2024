
import global from './global';

import Galeria from './pages/Galeria';

import TablaData from './pages/tabla';

const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        case '/index.html':
            pageVariables = Galeria;
            break;
            case '/about.html':
            pageVariables = TablaData;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;