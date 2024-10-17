import { useProfile } from '../../context/ProfileContext';

const Section1 = () => {
    const { profile } = useProfile();

    return (
        <>
            <div className="container mt-5">

                
                <div className="user-profile text-center">
                    <h3 className="text-center mb-4">Your Profile</h3>
                    <p className='textt'> Name:  <b> {profile.name}</b> </p>
                    <p className='textt'> Personal Goal: <b>  {profile.goal}</b> </p>

                    
                    <div className="motivation-container mt-4 p-4 rounded shadow-lg" style={{ backgroundColor: '#f9f9f9', borderLeft: '5px solid #1679AB' }}>
                        <h4 className="motivational-text" style={{ fontStyle: 'italic', color: '#1679AB' }}>
                            <i className="fa-solid fa-quote-left"></i> {profile.motivation} <i className="fa-solid fa-quote-right"></i>
                        </h4>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>Stay motivated and keep pushing forward!</p>
                    </div>
                </div>

                <div className="container border mt-5"></div>
            </div>
        </>
    );
};

export default Section1;
