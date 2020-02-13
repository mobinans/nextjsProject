import React from 'react';
import Header from '../components/Header';

const MyApp = ({Component, pageProps}) => {

    return(
        <React.Fragment>
            <Header/>
            <Component {...pageProps}/>
        </React.Fragment>
    );
};

export default MyApp;
