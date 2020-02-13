import Router from 'next/router';
import cookies from 'nookies';

const HomePage = () => null;

HomePage.getInitialProps = context => {
    const {defaultCountry} = cookies.get(context);

    const country = context.query.country || defaultCountry ||'in';

    process.browser ?
    Router.replace('/[country]', `${country}`) :
    context.res.writeHead(302, {Location: `/${country}`});
    context.res.end();
}

export default HomePage