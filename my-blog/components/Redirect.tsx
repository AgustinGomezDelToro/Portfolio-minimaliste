// components/Redirect.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({ to }) => {
    const router = useRouter();

    useEffect(() => {
        router.push(to);
    }, [to, router]);

    return null;
};

export default Redirect;
