import  { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';

const ProfilePage = () => {
    const { profile, updateProfile } = useProfile(); 
    const [formData, setFormData] = useState({
        name: profile.name,
        email: profile.email,
        goal: profile.goal || '',
        motivation: profile.motivation || '',
    });
    const [loading, setLoading] = useState(false); 
    const [message, setMessage] = useState(''); 

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); 

        
        setTimeout(() => {
            updateProfile(formData); 
            setLoading(false); 
            setMessage('Profile updated successfully!'); 
        }, 1000);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Edit Profile</h2>

           
            {message && <div className="alert alert-success text-center">{message}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Personal Goal</label>
                    <input
                        type="text"
                        className="form-control"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Motivation</label>
                    <input
                        type="text"
                        className="form-control"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                    />
                </div>
                 
                 <br/>

                
                <button type="submit" className="btn btn-primary mb-5" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Profile'}
                </button>

                

            </form>
        </div>
    );
};

export default ProfilePage;
