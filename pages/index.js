import Router from 'next/router';

const HomePage = () => null;

HomePage.getInitialProps = context => {
    const country = context.query.country || 'in';

    process.browser ?
    Router.replace('/[country]', `${country}`) :
    context.res.writeHead(302, {Location: `/${country}`});
    context.res.end();
}

export default HomePage