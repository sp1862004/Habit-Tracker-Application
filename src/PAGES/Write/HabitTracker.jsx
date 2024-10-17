import { push, ref, set } from 'firebase/database';
import { useForm } from 'react-hook-form';
import db from '../../../firebase';
import { useNavigate } from 'react-router-dom';

const HabitTracker = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newHabitRef = push(ref(db, 'Habits'));
        await set(newHabitRef, data);
        alert('Habit added successfully');
        reset();
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h6 className='mb-4 mt-3 text-center Start-Journey'>Add a New Habit</h6>
            <div className="container">
                <div className="row d-flex mx-auto justify-content-center">
                    <div className="col-lg-10 mx-auto mt-3 mb-2">
                        <input
                            type="text"
                            className='form-control shadow py-3 border-primary title'
                            {...register('habitName', { required: true })}
                            autoFocus
                            placeholder='Habit Name'
                        />
                    </div>
                    <div className="col-lg-10 mt-3">
                        <input
                            type="text"
                            className='form-control py-3 shadow border-primary'
                            {...register('goal', { required: true })}
                            placeholder='What do you want to achieve?'
                        />
                    </div>
                    <div className="col-lg-3 mt-3">
                        <input
                            type="date"
                            className='form-control py-3 shadow border-primary'
                            {...register('startDate')}
                        />
                    </div>
                    <div className="col-lg-10 mt-3">
                        <select
                            className='form-control py-3 shadow border-primary'
                            {...register('frequency', { required: true })}
                        >
                            <option value="">Select Frequency</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <div className="col-lg-10 mx-auto mb-4 mt-3">
                        <textarea
                            className="form-control shadow py-3 border-primary"
                            {...register('description')}
                            placeholder='Describe your habit...'
                            rows="6"
                        ></textarea>
                    </div>
                </div>
                <button type='submit' className='btn btn-success text-center mx-auto py-1 mb-3 d-grid mx-auto'>Add Habit</button>
            </div>
        </form>
    );
};

export default HabitTracker;
