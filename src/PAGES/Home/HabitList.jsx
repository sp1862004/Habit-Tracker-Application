import React, { useState } from 'react';
import { useHabits } from '../../context/HabitsContext';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa'; 

const HabitList = () => {
    const { habits, deleteHabit, markHabitComplete } = useHabits();
    const [searchTerm, setSearchTerm] = useState('');
    const [motivationMessage, setMotivationMessage] = useState('');
    const [showMotivation, setShowMotivation] = useState(false);

    const filteredHabits = habits.filter(habit =>
        habit.habitName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        habit.goal?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleMarkComplete = (habitId) => {
        const confirmComplete = window.confirm("Are you sure you want to mark this habit as complete?");
        if (confirmComplete) {
            markHabitComplete(habitId);
            setMotivationMessage("Great job! Keep up the good work! 🌟");
            setShowMotivation(true);
            setTimeout(() => {
                setShowMotivation(false);
                const confirmDelete = window.confirm("Do you want to delete this habit now?");
                if (confirmDelete) {
                    deleteHabit(habitId); 
                }
            }, 3000); 
        }
    };

    const handleDeleteHabit = (habitId) => {
        const confirmed = window.confirm("Are you sure you want to delete this habit?");
        if (confirmed) {
            deleteHabit(habitId); 
        }
    };

    return (
        <div className="container mb-5">
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                        placeholder="Search for habits by name or goal... "
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    
                </div>
            </div>

            {showMotivation && (
                <div className="alert alert-success text-center animated fadeIn" style={{ animation: 'fadeIn 0.5s' }}>
                    {motivationMessage}
                </div>
            )}

            <div className="row">
                {filteredHabits.length > 0 ? (
                    filteredHabits.map((habit) => (
                        <div key={habit.id} className="col-md-12 mb-4">
                            <div className={`card h-100 shadow-lg border-0 ${habit.isComplete ? 'bg-success text-white' : ''} transition`} style={{ transition: 'transform 0.2s' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{habit.habitName}</h5>
                                    <p className="card-text">
                                        <strong>Goal:</strong> {habit.goal}<br />
                                        <strong>Description:</strong> {habit.description}<br />
                                        <strong>Status:</strong> {habit.isComplete ? 'Completed' : 'Not Completed'}<br />
                                        <strong>Streak:</strong> {habit.streak} days
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/ShowMorePage/${habit.id}`} className="btn btn-dark">
                                            Show More
                                        </Link>
                                        <button onClick={() => handleMarkComplete(habit.id)} className="btn btn-success ms-2">
                                            <FaCheckCircle /> Mark as Complete
                                        </button>
                                        <button onClick={() => handleDeleteHabit(habit.id)} className="btn btn-danger ms-2">
                                            <FaTrashAlt /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center fs-1 mt-5 text-danger mb-5">
                        <h5>No Habits Found...</h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HabitList;
