import axios from 'axios';
import Error from 'next/error';
import cookies from 'nookies';

import Thumbnail from '../../components/Thumbnail';


const Home = ({ shows, country, statusCode }) => {
    //console.log(shows)    
    if(statusCode){
        return <Error statusCode={statusCode}/>
    }
    const renderShows = () => {
        return shows.map((showItem, index) => {
            const { show } = showItem;
            return <li key={index}>
                <Thumbnail
                    imageURL={(show.image && show.image.medium) || undefined}
                    caption={show.name}
                    href="[country]/[showId]"
                    as={`/${country}/${show.id}`}
                /></li>
        })
    }

    return (
        <div className="home">
            <ul className="tvshows-grid">
                {renderShows()}

                <style jsx>{
                    `.tvshows-grid {
						display: grid;
						grid-template-columns: 1fr 1fr;
                        gap: 10px;
                        list-style-type: none;
                        padding: 0;
				}`}</style>
            </ul>
        </div>
    );
}

Home.getInitialProps = async context => {

    try {
        const {defaultCountry} = cookies.get(context);
        const country = context.query.country || defaultCountry || 'in';
        const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
        return {
            shows: response.data,
            country
        }
    }catch(error){
        return {statusCode: error.response ? error.response.status : 500}
    }
}

export default Home;