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
    password: '',
    returnSecureToken: true
}

const Signup = () => {
    const [signupInfo, setSignupInfo] = useState(initalState);
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = signupInfo;

        if (!email || !password) {
            return;
        }

        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCS1Qzrbf2h8mbi_Ck7ubRzW8LIBEqHt0Y', {
                ...signupInfo
            });

            cookies.set(null, 'token', response.data.idToken, { path: '/' });
            router.replace('/[country]', '/us');
        } catch (error) {
            setError(error.message)
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setSignupInfo({
            ...signupInfo,
            [name]: value
        })
    }

    return (
        <div className="signin">
            <form onSubmit={handleSubmit}>
                <CustomInput
                    name="email"
                    placeholder="Enter your Email"
                    value={signupInfo.email}
                    onChange={handleInputChange}
                    onBlur={validateEmail}>
                </CustomInput>
                <CustomInput
                    name="password"
                    placeholder="Enter your Password"
                    type="password"
                    value={signupInfo.password}
                    onChange={handleInputChange}
                    onBlur={validateRequired}>
                </CustomInput>
                {error && <div className="errorMsg">{error}</div>}
                <button type="submit">Submit</button>
                <Link href="/signin">
                    <a>Already have a account</a>
                </Link>
            </form>
        </div>
    );
};

export default Signup;