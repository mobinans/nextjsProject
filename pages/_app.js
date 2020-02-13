import React from 'react';
import Header from '../components/Header';

const MyApp = ({Component, pageProps}) => {

    return(
        <React.Fragment>
            <Header/>
            <Component {...pageProps}/>

            <style jsx>{`
            @font-face {
                font-family: 'raleway';
                src: url('/fonts/raleway/Raleway-Regular.ttf') format('truetype');
            }

            :global(html){
                font-family: 'raleway';
            }
            `}</style>
        </React.Fragment>
    );
};

export default MyApp;
