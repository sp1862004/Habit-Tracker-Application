// context/HabitsContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { get, ref, remove, set } from 'firebase/database';
import db from '../../firebase';

const HabitsContext = createContext();

export const useHabits = () => useContext(HabitsContext);

export const HabitsProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);

    const fetchHabits = async () => {
        const dbRef = ref(db, "Habits");
        const snapshot = await get(dbRef);
        let habitList = [];
        if (snapshot.exists()) {
            for (const key in snapshot.val()) {
                const element = snapshot.val()[key];
                habitList.push({ id: key, ...element });
            }
        }
        setHabits(habitList);
    };

    const markHabitComplete = async (id) => {
        const dbRef = ref(db, `Habits/${id}`);
        const habitSnapshot = await get(dbRef);
        if (habitSnapshot.exists()) {
            const habit = habitSnapshot.val();
            const newCompletedDates = [...habit.completedDates, new Date().toISOString().split('T')[0]]; 
            const newStreak = habit.isComplete ? habit.streak : (habit.streak + 1);
            await set(dbRef, { ...habit, isComplete: true, completedDates: newCompletedDates, streak: newStreak });
            fetchHabits(); 
        }
    };
    

    const deleteHabit = async (id) => {
        const dbRef = ref(db, `Habits/${id}`);
        await remove(dbRef);
        fetchHabits(); 
    };

    useEffect(() => {
        fetchHabits(); 
    }, []);

    return (
        <HabitsContext.Provider value={{ habits, deleteHabit, markHabitComplete }}>
            {children}
        </HabitsContext.Provider>
    );
};
