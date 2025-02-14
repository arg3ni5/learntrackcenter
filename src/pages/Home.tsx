import React, { useEffect, useMemo } from 'react';
import Login from '../auth/components/Login';
import { useUsers } from '../auth/hooks/useUsers';
import { useAuth } from '../auth/hooks/useAuth';
import UserProfile from '../components/UserProfile/UserProfile';

const Home: React.FC = () => {
    const { user } = useAuth();
    const { linkGoogleAccount } = useUsers();

    useEffect(() => {
        console.log(user);
    }, [user])


    const isLikendGoogle = useMemo(() => {
        return user?.providerData.some(item => item.providerId === "google.com")
    }, [user]);

    return (
        <div className="home-container">
            <h1>Welcome to LearnTrackCenter</h1> <p>Your platform for managing grades and students.</p>

            {!user ? (
                <Login />
            ) : (
                <UserProfile />
            )}

            {user && !isLikendGoogle && (<button onClick={linkGoogleAccount}>
                Vincular con Google
            </button>)}

        </div>
    );
};

export default Home;
