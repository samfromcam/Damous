import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Form.css'
import { Table } from '../components/Table'
import { Modal } from '../components/Modal'
import debounce from 'lodash.debounce'
import axios from 'axios'
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from 'react-country-state-city'
import 'react-country-state-city/dist/react-country-state-city.css'
import Select from 'react-select'
import {
    ActivityTypes,
    ApplicationTypes,
    DecisionTypes,
    FormDefault,
    raceOptions,
    testOptions,
} from '../common'
import { SATFields, ACTFields } from '../components/TestScoreForm'

const _promiseOptions = (inputValue: string) => {
    return axios
        .get(
            'https://5au48yqmy4.execute-api.ap-northeast-1.amazonaws.com/production/get_colleges?search=' +
                inputValue
        )
        .then((resp) => {
            return resp['data']['urls'].map((college: any) => ({
                value: college[0],
                label: college[1],
            }))
        })
}

const promiseOptions = debounce(_promiseOptions, 300)

function Form() {
    const { url } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({ ...FormDefault, url: url })
    const [countryid, setCountryid] = useState(0)
    const [stateid, setstateid] = useState(0)
    const [colleges, setColleges] = useState([])
    const [modalState, setModalState] = useState({
        testModal: { isOpen: false, rowToEdit: -1 },
        activityModal: { isOpen: false, rowToEdit: -1 },
        collegeModal: { isOpen: false, rowToEdit: -1 },
    })

    //debug
    useEffect(() => {
        console.log('Post updated:', post)
    }, [post])

    const handleInput = useCallback(
        debounce((event: React.ChangeEvent<HTMLInputElement>) => {
            setPost((prevPost) => ({
                ...prevPost,
                [event.target.name]: event.target.value,
            }))
        }, 300),
        []
    )

    const handleMultiSelect = useCallback((event: any) => {
        setPost((prevPost) => ({
            ...prevPost,
            race: event.map((race: any) => race.value),
        }))
    }, [])

    const handleSubmit = useCallback((event: React.SyntheticEvent) => {
        event.preventDefault()
        const processedPost = { ...post }

        // Preprocess the specific field
        if (processedPost.ap_ib_scores) {
            processedPost.ap_ib_scores = processedPost.ap_ib_scores.map(
                (test) => JSON.stringify(test)
            )
        }
        if (processedPost.extracurricular) {
            processedPost.extracurricular = processedPost.extracurricular.map(
                (activity) => JSON.stringify(activity)
            )
        }

        axios
            .post(
                'https://5au48yqmy4.execute-api.ap-northeast-1.amazonaws.com/production/uploadapp',
                { processedPost }
            )
            .then((response) => {
                console.log(response)
                navigate('/database-collection')
            })
            .catch((err) => alert(err))
    }, [])

    const handleDeleteRow = useCallback(
        (column: string, targetIndex: number) => {
            setPost((prevPost) => ({
                ...prevPost,
                [column]: prevPost[column].filter(
                    (_, idx) => idx !== targetIndex
                ),
            }))
        },
        []
    )

    const handleEditRow = useCallback((modalType, idx) => {
        setModalState((prevState) => ({
            ...prevState,
            [modalType]: { isOpen: true, rowToEdit: idx },
        }))
    }, [])

    const handleCloseModal = useCallback((modalType: string, open: boolean) => {
        setModalState((prevState) => {
            const newState = {
                ...prevState,
                [modalType]: { isOpen: open, rowToEdit: -1 },
            }
            return newState
        })
    }, [])

    const handleModalSubmit = (modal: string, column: string, newRow: any) => {
        modalState[modal].rowToEdit < 0
            ? setPost({ ...post, [column]: [...post[column], newRow] })
            : setPost({
                  ...post,
                  [column]: post[column].map((currRow, idx) => {
                      if (idx !== modalState[modal].rowToEdit) return currRow
                      return newRow
                  }),
              })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(
                    'https://5au48yqmy4.execute-api.ap-northeast-1.amazonaws.com/production/get_colleges?search='
                )
                setColleges(
                    response['urls'].map((college: any) => ({
                        value: college[0],
                        label: college[1],
                    }))
                )
            } catch (error: any) {
                console.error(error.message)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <h1>
                <a href="/database-collection">
                    Damous Data Collection Platform
                </a>
            </h1>
            <form onSubmit={handleSubmit}>
                <CountrySelect
                    onChange={(e: any) => {
                        setCountryid(e.id)
                        setPost({ ...post, country: e.name })
                    }}
                    placeHolder="Select Country"
                    required
                />
                <StateSelect
                    countryid={countryid}
                    onChange={(e: any) => {
                        setstateid(e.id)
                        setPost({ ...post, state: e.name })
                    }}
                    placeHolder="Select State"
                />
                <CitySelect
                    countryid={countryid}
                    stateid={stateid}
                    onChange={(e: any) => {
                        setPost({ ...post, city: e.name })
                    }}
                    placeHolder="Select City"
                />
                <p>Gender:</p>
                <select
                    name="gender"
                    id="gender"
                    onChange={handleInput}
                    required
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <p>Hispanic or Latino:</p>
                <select
                    name="hispanic"
                    id="hispanic"
                    onChange={handleInput}
                    defaultValue={'false'}
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <p>Race:</p>
                <Select
                    isMulti
                    name="race"
                    options={raceOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleMultiSelect}
                />
                <p>First Generation Student:</p>
                <select
                    name="first_gen"
                    id="first_gen"
                    onChange={handleInput}
                    defaultValue={'false'}
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <p>Recruited Athlete:</p>
                <select
                    name="athlete"
                    id="athlete"
                    onChange={handleInput}
                    defaultValue={'false'}
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <p>Underepresented Minority:</p>
                <select
                    name="urm"
                    id="urm"
                    onChange={handleInput}
                    defaultValue={'false'}
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <p>Intended Major</p>
                <input
                    type="text"
                    id="major"
                    name="major"
                    onChange={handleInput}
                />
                <p>Legacy:</p>
                <p>Separate by comma if more than one</p>
                <input
                    form="text"
                    id="legacy"
                    name="legacy"
                    onChange={(e) => {
                        setPost({
                            ...post,
                            [e.target.name]: e.target.value
                                .toLowerCase()
                                .split(','),
                        })
                    }}
                />
                <p>GPA (Unweighted):</p>
                <input
                    type="number"
                    step="0.01"
                    id="gpa_uw"
                    name="gpa_uw"
                    min={0}
                    max={5}
                    required
                    onChange={handleInput}
                ></input>
                <p>GPA (Weighted):</p>
                <input
                    type="number"
                    step="0.01"
                    id="gpa_w"
                    name="gpa_w"
                    min={0}
                    onChange={handleInput}
                ></input>
                <p>Education System:</p>
                <select name="ed_type" id="ed_type" onChange={handleInput}>
                    <option value="ap">AP</option>
                    <option value="ib">IB</option>
                    <option value="a_levels">A Levels</option>
                    <option value="dual_enrollment">Dual Enrollment</option>
                    <option value="other">Other</option>
                </select>
                <p>Last year course load: </p>
                <textarea
                    name="course_load"
                    id="course_load"
                    onChange={handleInput}
                    cols={100}
                ></textarea>
                <p>SAT</p>
                <input
                    type="number"
                    id="sat"
                    name="sat"
                    min={0}
                    max={1600}
                    onChange={handleInput}
                ></input>
                <SATFields score={post.sat} handleInput={handleInput} />
                <p>ACT</p>
                <input
                    type="number"
                    id="act"
                    name="act"
                    min={0}
                    max={36}
                    onChange={handleInput}
                ></input>
                <ACTFields score={post.act} handleInput={handleInput} />
                <p>Other test scores (AP / IB / A Level / SAT Subject ...) </p>
                <Table
                    rows={post['ap_ib_scores']}
                    deleteRow={(row: number) =>
                        handleDeleteRow('ap_ib_scores', row)
                    }
                    editRow={(row: number) => handleEditRow('testModal', row)}
                    columnName={['Test', 'Score']}
                    columnID={['test', 'score']}
                />
                <button
                    onClick={() => handleCloseModal('testModal', true)}
                    className="btn"
                    type="button"
                >
                    Add
                </button>
                {modalState.testModal.isOpen && (
                    <Modal
                        closeModal={() => {
                            handleCloseModal('testModal', false)
                        }}
                        onSubmit={(newRow: any) =>
                            handleModalSubmit(
                                'testModal',
                                'ap_ib_scores',
                                newRow
                            )
                        }
                        defaultValue={
                            modalState.testModal.rowToEdit !== null &&
                            post.ap_ib_scores[modalState.testModal.rowToEdit]
                        }
                        modalFields={[
                            {
                                type: 3,
                                label: 'Test',
                                id: 'test',
                                nodeOptions: testOptions,
                            },
                            {
                                type: 1,
                                label: 'Score',
                                id: 'score',
                                inputType: 'number',
                            },
                        ]}
                        formBase={{
                            test: '',
                            score: '',
                        }}
                    />
                )}
                <p>Extracurriculars</p>
                <Table
                    rows={post.extracurricular}
                    deleteRow={(row: number) =>
                        handleDeleteRow('extracurricular', row)
                    }
                    editRow={(row: number) =>
                        handleEditRow('activityModal', row)
                    }
                    columnName={[
                        'Type',
                        'Position',
                        'Organization',
                        'Description',
                    ]}
                    columnID={['type', 'position', 'org', 'description']}
                />
                <button
                    onClick={() => handleCloseModal('activityModal', true)}
                    className="btn"
                    type="button"
                >
                    Add
                </button>
                {modalState.activityModal.isOpen && (
                    <Modal
                        closeModal={() => {
                            handleCloseModal('activityModal', false)
                        }}
                        onSubmit={(newRow: any) =>
                            handleModalSubmit(
                                'activityModal',
                                'extracurricular',
                                newRow
                            )
                        }
                        defaultValue={
                            modalState.activityModal.isOpen !== null &&
                            post.extracurricular[
                                modalState.activityModal.rowToEdit
                            ]
                        }
                        modalFields={[
                            {
                                type: 0,
                                label: 'Type',
                                id: 'type',
                                selectOptions: ActivityTypes,
                            },
                            {
                                type: 1,
                                label: 'Position/Leadership description',
                                id: 'position',
                                inputType: 'text',
                            },
                            {
                                type: 1,
                                label: 'Organization Name',
                                id: 'org',
                                inputType: 'text',
                            },
                            {
                                type: 1,
                                label: 'Description',
                                id: 'description',
                                inputType: 'text',
                            },
                        ]}
                        formBase={{
                            type: '',
                            position: '',
                            org: '',
                            description: '',
                        }}
                    />
                )}
                <p>Awards and Honors</p>
                <textarea
                    name="awards"
                    id="awards"
                    onChange={handleInput}
                    cols={100}
                    rows={15}
                    required
                ></textarea>
                <p>Essays</p>
                <textarea
                    name="essays"
                    id="essays"
                    onChange={handleInput}
                    cols={100}
                    rows={15}
                ></textarea>
                <p>Letters of Recommendation</p>
                <textarea
                    name="lors"
                    id="lors"
                    onChange={handleInput}
                    cols={100}
                    rows={15}
                    required
                ></textarea>
                <p>Rank:</p>
                <input
                    type="number"
                    id="rank"
                    name="rank"
                    min={1}
                    onChange={handleInput}
                ></input>
                <p>Percentile:</p>
                <input
                    type="number"
                    id="percentile"
                    name="percentile"
                    min={0}
                    max={100}
                    onChange={handleInput}
                ></input>
                <p>College Application Results:</p>
                <Table
                    rows={post.results}
                    deleteRow={(row: number) => handleDeleteRow('results', row)}
                    editRow={(row: number) =>
                        handleEditRow('collegeModal', row)
                    }
                    columnName={['College', 'Application Type', 'Decision']}
                    columnID={['name', 'type', 'decision']}
                />
                <button
                    onClick={() => handleCloseModal('collegeModal', true)}
                    className="btn"
                    type="button"
                >
                    Add
                </button>
                {modalState.collegeModal.isOpen && (
                    <Modal
                        closeModal={() => {
                            handleCloseModal('collegeModal', false)
                        }}
                        onSubmit={(newRow: any) =>
                            handleModalSubmit('collegeModal', 'results', newRow)
                        }
                        defaultValue={
                            modalState.collegeModal.rowToEdit !== null &&
                            post.results[modalState.collegeModal.rowToEdit]
                        }
                        modalFields={[
                            {
                                type: 2,
                                label: 'College',
                                id: 'id',
                                asyncDefault: colleges,
                                asyncLoad: promiseOptions,
                            },
                            {
                                type: 0,
                                label: 'Application Type',
                                id: 'type',
                                selectOptions: ApplicationTypes,
                            },
                            {
                                type: 0,
                                label: 'Decision',
                                id: 'decision',
                                selectOptions: DecisionTypes,
                            },
                        ]}
                        formBase={{
                            id: '',
                            name: '',
                            type: '',
                            decision: '',
                        }}
                    />
                )}
                <p>Your email</p>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInput}
                />
                <input type="submit" />
            </form>
        </>
    )
}

export default Form
