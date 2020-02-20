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

            :global(form){
                margin-top: 10px;
                display: flex;
                width: 100%;
                flex-direction: column;
                text-align: center;
            }

            :global(input){
                margin-bottom: 10px;
                padding: 10px;
                width: 100%;
                box-sizing: border-box;
            }

            :global(button){
                padding: 10px;
                margin-bottom: 10px;
                cursor: pointer;
                background-color: grey;
                color: #fff;
            }

            :global(.errorMsg){
                color: red;
                margin-bottom: 5px;
            }
            `}</style>
        </React.Fragment>
    );
};

export default MyApp;
