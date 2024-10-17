import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { get, ref, set } from 'firebase/database'; 
import db from '../../../firebase';

const ShowMorePage = () => {
    const { id } = useParams(); 
    const [habit, setHabit] = useState(null); 
    const [completionPercentage, setCompletionPercentage] = useState(0); 

    useEffect(() => {
        const fetchHabitData = async () => {
            const dbRef = ref(db, `Habits/${id}`); 
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const fetchedHabit = snapshot.val(); 
                setHabit(fetchedHabit);

                if (fetchedHabit.frequency > 0) {
                    const percentage = (fetchedHabit.streak / fetchedHabit.frequency) * 100;
                    setCompletionPercentage(percentage);
                }
            } else {
                console.log("No such habit found!");
            }
        };

        fetchHabitData();
    }, [id]);

    const incrementProgress = () => {
        setCompletionPercentage((prev) => {
            const newPercentage = Math.min(prev + 10, 100); 
            const dbRef = ref(db, `Habits/${id}`);
            set(dbRef, { ...habit, progress: newPercentage }); 
            return newPercentage;
        });
    };

    if (!habit) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mb-5">
            <h1 className='mt-5 mb-5'>Habit Details</h1>

            <div className="row">
                <div className="col-lg-12 border p-3 shadow-lg rounded">
                    {habit.image && (
                        <img src={habit.image} height={500} className="card-img-top shadow-lg rounded" alt="Habit" />
                    )}
                    <div className="card-body">
                        <h6 className="card-title">
                            <b>Habit Name</b>: {habit.habitName}
                            <span style={{ color: '#5A639C' }}> Started on: {habit.startDate}</span>
                        </h6>
                        <p className="card-text mt-4 mb-3"><b>Goal</b>: {habit.goal}</p>
                        <p className="card-text mt-4 mb-3"><b>Frequency</b>: {habit.frequency}</p>
                        <p className="card-text">{habit.description}</p> 

                        
                        <div className="mt-4">
                            <h6 className="mt-4 mb-3"><b>Progress:</b></h6>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${completionPercentage}%`, transition: 'width 0.5s' }}
                                    aria-valuenow={completionPercentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {Math.round(completionPercentage)}%
                                </div>
                            </div>
                        </div>

                        
                        <div className="mt-4">
                            <h6 className="mt-4 mb-3"><b>Select Progress to Increase:</b></h6>
                            <div className="d-flex flex-wrap">
                                {Array.from({ length: 10 }, (_, index) => (
                                    <div key={index} className="form-check me-3 mb-2">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="progress"
                                            id={`progress${index}`}
                                            onClick={incrementProgress} 
                                        />
                                        <label className="form-check-label" htmlFor={`progress${index}`}>
                                            Increase by {10 * (index + 1)}%
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Link to update habit */}
            <Link to={`/edit/${id}`} className='btn btn-warning text-center py-1 mb-3 d-grid mx-auto mt-4 shadow-lg rounded'>
                Update Habit
            </Link>
        </div>
    );
};

export default ShowMorePage;
