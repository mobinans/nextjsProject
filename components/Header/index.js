import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import cookies from 'nookies';

const countries = [{
    label: 'us',
    name: 'United State'
},{
    label: 'in',
    name: 'India'
},{
    label: 'gb',
    name: 'Great Britain'
}]

const Header = () => {
    const router = useRouter();
    const [selectedCountry, setSelectedCountry] = useState(router.query.country);


    const onChangeHandler = (e) => {
        setSelectedCountry(e.target.value);
        router.push(`/[country]`, `/${e.target.value}`);        
    };

    const renderCountries = () =>{
        return countries.map(country => {
            return <option key={country.label} value={country.label}>{country.name}</option>
        })
    }

    useEffect(() => {
        cookies.set(null, 'defaultCountry', selectedCountry, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    },[selectedCountry]);
    

    return (
        <div className="header">
            <select className="grp__option"
            value={selectedCountry}
            onChange={onChangeHandler}>
                {renderCountries()}
            </select>        
        <style jsx>{`
        .header{
            padding: 20px;
            background-color: #333;
            color: #fff;
            text-align: center;
            cursor: pointer;
        }
        .grp__option {
            font-size: 20px;
            padding: 5px 5px;
        }
        .grp__option > :global(option){
            font-size: 15px;            
        }
        `}</style>
        </div>
    );
};

export default Header;