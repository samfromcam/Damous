import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home' // Your main page component
import CaseStudyPage from './pages/CaseStudy' // Your case study page component
import Form from './pages/Form'
import Collect from './pages/Collect'
import { useEffect } from 'react'

const App = () => {
    const location = useLocation()

    useEffect(() => {
        // Set the default background color
        document.body.style.backgroundColor = 'black'

        // Set the background color to white for specific pages
        if (
            location.pathname === '/database-collection' ||
            location.pathname.startsWith('/form/')
        ) {
            document.body.style.backgroundColor = 'white'
        }

        // Clean up the effect when the component is unmounted or route changes
        return () => {
            document.body.style.backgroundColor = 'black'
        }
    }, [location])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-study" element={<CaseStudyPage />} />
                <Route path="/database-collection" element={<Collect />} />
                <Route path="/form/:url" element={<Form />} />
            </Routes>
        </div>
    )
}

export default App
