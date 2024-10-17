import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ref as dbRef, get, ref, set } from 'firebase/database';
import db from '../../../firebase';

const UpdateHabit = () => {
    const { id } = useParams(); 
    const { register, handleSubmit, reset } = useForm(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchHabitData();
        }
    }, [id]);

    const fetchHabitData = async () => {
        try {
            console.log("Fetching data for Habit ID:", id); 
            const databaseRef = dbRef(db, `Habits/${id}`); 
            const snapshot = await get(databaseRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log("Fetched habit data:", data); 
                reset(data); 
            } else {
                console.log("No such habit found!");
            }
        } catch (error) {
            console.error("Error fetching habit data: ", error);
        }
    };

    const onSubmit = async (data) => {
        try {
            const habitRef = ref(db, `Habits/${id}`); 
            await set(habitRef, data);
            alert("Habit updated successfully!");
            reset();
            navigate('/'); 
        } catch (error) {
            console.error("Error updating habit: ", error);
            alert("Error: " + error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h6 className='mb-4 mt-3 text-center'>Update Your Habit</h6>
                <div className="container">
                    <div className="row d-flex mx-auto justify-content-center">
                        <div className="col-lg-10 mx-auto mt-3 mb-2">
                            <input
                                type="text"
                                className='form-control shadow py-3 border-primary'
                                {...register('habitName')} 
                                placeholder='Habit Name'
                                autoFocus
                            />
                        </div>
                        <div className="col-lg-7 mt-3">
                            <label htmlFor="goalInput" className="form-label" style={{ color: '#365E32' }}>Goal</label>
                            <input
                                type="text"
                                className='form-control py-3 shadow border-primary'
                                id="goalInput"
                                {...register('goal')} 
                                placeholder='Set a goal (e.g., run 5km daily)'
                            />
                        </div>
                        <div className="col-lg-3 mt-3">
                            <label htmlFor="dateInput" className="form-label" style={{ color: '#365E32' }}>Start Date</label>
                            <input
                                type="date"
                                className='form-control py-3 shadow border-primary'
                                id="dateInput"
                                {...register('startDate')} 
                            />
                        </div>
                        <div className="col-lg-10 mt-3">
                            <label htmlFor="frequencyInput" className="form-label" style={{ color: '#365E32' }}>Frequency</label>
                            <input
                                type="text"
                                className='form-control py-3 shadow border-primary'
                                id="frequencyInput"
                                {...register('frequency')} 
                                placeholder='Frequency (e.g., daily, weekly)'
                            />
                        </div>
                        <div className="col-lg-10 mt-3">
                            <label htmlFor="descriptionText" className="form-label fs-6" style={{ color: '#365E32' }}>Habit Description</label>
                            <textarea
                                className="form-control shadow py-3 border-primary"
                                id="descriptionText"
                                {...register('description')} 
                                rows="8"
                                placeholder='Describe your habit'
                            />
                        </div>
                    </div>
                </div>
                <button className='btn btn-success text-center mx-auto py-1 mb-3 d-grid mx-auto'>Update Habit</button>
            </form>
        </>
    );
};

export default UpdateHabit;
