import axios from 'axios'
import './Collect.css'
import { useCallback, useEffect, useState } from 'react'

function Collect() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data: response } = await axios.get(
                    'https://5au48yqmy4.execute-api.ap-northeast-1.amazonaws.com/production/get_urls'
                )
                setData(response['urls'])
                console.log(response)
            } catch (error) {
                console.error(error.message)
            }
            setLoading(false)
        }

        fetchData()
    }, [])

    const [email, setEmail] = useState('')
    const [jobs, setJobs] = useState(0)

    const handleChange = useCallback((event) => {
        setEmail(event.target.value)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault() // Prevent the default form submission

        try {
            const { data: response } = await axios.get(
                'https://5au48yqmy4.execute-api.ap-northeast-1.amazonaws.com/production/get_jobs?search=' +
                    email
            )
            setJobs(response['jobs'])
            console.log(response)
        } catch (error) {
            console.error(error.message)
            alert('email does not exist in the workers list')
        }
    }

    return (
        <>
            <h1>Damous Data Collection Platform</h1>
            <h2>Check My Work Done: </h2>
            <div className="workCheck">
                <form onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={email}
                    ></input>
                    <input type="submit" value="Submit"></input>
                    <p>Jobs: {jobs}</p>
                </form>
            </div>
            <h2>Click on a link and fill out the form accordingly</h2>
            {loading && <div>Loading</div>}
            {data.map((item) => (
                <p key={item}>
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            window.open(item, '_blank') // Open the original URL in a new tab first
                            setTimeout(() => {
                                window.location.href =
                                    '/form/' + encodeURIComponent(item) // Then redirect to /form/{encodedItem}
                            }, 100) // A slight delay to ensure the new tab opens before redirecting
                        }}
                    >
                        {item}
                    </a>
                </p>
            ))}
        </>
    )
}

export default Collect
