import { useState } from 'react';
import axios from 'axios';
import cookies from 'nookies';
import router from 'next/router';
import Link from 'next/link';

import CustomInput from '../components/CustomInput';
import validateEmail from '../utils/validators/validateEmail';
import validateRequired from '../utils/validators/validateRequired';

const initalState = {
    email: '',
    password: ''
}

const Signin = () => {
    const [signinInfo, setSigninInfo] = useState(initalState);
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = signinInfo;

        if (!email || !password) {
            return;
        }

        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCS1Qzrbf2h8mbi_Ck7ubRzW8LIBEqHt0Y', {
                ...signinInfo
            });

            cookies.set(null, 'token', response.data.idToken, { path: '/' });
            const {plannedRoute} = cookies.get();

            const parsedPlannedRoute = plannedRoute && JSON.parse(plannedRoute);

            const plannedHrefRout = parsedPlannedRoute ? parsedPlannedRoute.href: '/[country]';
            const plannedAsRout = parsedPlannedRoute ? parsedPlannedRoute.as : '/in';

            router.replace(plannedHrefRout, plannedAsRout);
        } catch (error) {
            setError(error.message)
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setSigninInfo({
            ...signinInfo,
            [name]: value
        })
    }

    return (
        <div className="signin">
            <form onSubmit={handleSubmit}>
                <CustomInput
                    name="email"
                    placeholder="Enter your Email"
                    value={signinInfo.email}
                    onChange={handleInputChange}
                    onBlur={validateEmail}>
                </CustomInput>
                <CustomInput
                    name="password"
                    placeholder="Enter your Password"
                    type="password"
                    value={signinInfo.password}
                    onChange={handleInputChange}
                    onBlur={validateRequired}>
                </CustomInput>
                {error && <div className="errorMsg">{error}</div>}
                <button type="submit">Submit</button>
                <Link href="/signup">
                    <a>Create an accounts</a>
                </Link>
            </form>
        </div>
    );
};

export default Signin;