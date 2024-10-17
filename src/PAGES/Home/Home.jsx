import Section1 from './Section1'
import HabitList from './HabitList'
import { ProfileProvider } from '../../context/ProfileContext'

const Home = () => {
    return (
        <>
        <ProfileProvider>
        <Section1 />
        </ProfileProvider>
            
            <HabitList />
        </>
    )
}

export default Home
