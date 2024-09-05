export const ActivityTypes: string[] = [
    'Academic',
    'Art',
    'Athletics: Club',
    'Athletics: JV/Varsity',
    'Career Oriented',
    'Community Service (Volunteer)',
    'Computer/Technology',
    'Cultural',
    'Dance',
    'Debate/Speech',
    'Environmental',
    'Family Responsibilities',
    'Foreign Exchange',
    'Foreign Language',
    'Internship',
    'Journalism/Publication',
    'Junior R.O.T.C.',
    'LGBT',
    'Music: Instrumental',
    'Music: Vocal',
    'Religious',
    'Research',
    'Robotics',
    'School Spirit',
    'Science/Math',
    'Social Justice',
    'Student Govt./Politics',
    'Theater/Drama',
    'Work (Paid)',
    'Other Club/Activity',
]

export const ApplicationTypes: string[] = [
    'EA',
    'ED',
    'REA',
    'EA2',
    'RD',
    'other',
]

export const DecisionTypes: string[] = ['accept', 'reject', 'waitlist', 'other']

export const raceOptions = [
    {
        value: 'American Indian or Alaska Native',
        label: 'American Indian or Alaska Native',
    },
    { value: 'Asian', label: 'Asian' },
    { value: 'Black or African American', label: 'Black or African American' },
    {
        value: 'Native Hawaiian or Other Pacific Islander',
        label: 'Native Hawaiian or Other Pacific Islander',
    },
    { value: 'White', label: 'White' },
]

export function checkProperties(obj: any) {
    return Object.values(obj).every((value) => value)
}

export enum ModalType {
    Select,
    Input,
    AysncSelect,
    TreeSelect,
}

export const FormDefault = {
    country: '',
    state: '',
    city: '',
    gender: 'other',
    hispanic: false,
    race: [],
    first_gen: false,
    athlete: false,
    urm: false,
    legacy: [],
    gpa_uw: 'NULL',
    ed_type: 'other',
    course_load: '',
    sat: 'NULL',
    act: 'NULL',
    ap_ib_scores: [],
    extracurricular: [],
    awards: '',
    essays: '',
    lors: '',
    rank: 'NULL',
    percentile: 'NULL',
    results: [],
    email: '',
    gpa_w: 'NULL',
    major: '',
    sat_read: 'NULL',
    sat_math: 'NULL',
    sat_essay: 'NULL',
    act_eng: 'NULL',
    act_math: 'NULL',
    act_read: 'NULL',
    act_write: 'NULL',
    act_sci: 'NULL',
}

export const fetchColleges = async () => {
    try {
        const { data: response } = await axios.get(
            'https://5au48yqmy4.execute-api.ap-northeast-1.amazonaws.com/production/get_colleges?search='
        )
        return response['urls'].map((college: any) => ({
            value: college[0],
            label: college[1],
        }))
    } catch (error) {
        console.error(error.message)
    }
}

export const testOptions = [
    {
        title: 'SAT II',
        selectable: false,
        value: '0-0',
        children: [
            {
                title: 'SAT Biology - Ecological',
                value: 'SAT Biology - Ecological',
            },
            {
                title: 'SAT Biology - Molecular',
                value: 'SAT Biology - Molecular',
            },
            {
                title: 'SAT Chemistry',
                value: 'SAT Chemistry',
            },
            {
                title: 'SAT Chinese with Listening',
                value: 'SAT Chinese with Listening',
            },
            {
                title: 'SAT French Reading',
                value: 'SAT French Reading',
            },
            {
                title: 'SAT French with Listening',
                value: 'SAT French with Listening',
            },
            ,
            {
                title: 'SAT German Reading',
                value: 'SAT German Reading',
            },
            {
                title: 'SAT German with Listening',
                value: 'SAT German with Listening',
            },
            {
                title: 'SAT Italian Reading',
                value: 'SAT Italian Reading',
            },
            {
                title: 'SAT Japanese with Listening',
                value: 'SAT Japanese with Listening',
            },
            {
                title: 'SAT Korean with Listening',
                value: 'SAT Korean with Listening',
            },
            {
                title: 'SAT Latin Reading',
                value: 'SAT Latin Reading',
            },
            {
                title: 'SAT Literature',
                value: 'SAT Literature',
            },
            {
                title: 'SAT Math Level 1',
                value: 'SAT Math Level 1',
            },
            {
                title: 'SAT Math Level 2',
                value: 'SAT Math Level 2',
            },
            {
                title: 'SAT Modern Hebrew Reading',
                value: 'SAT Modern Hebrew Reading',
            },
            {
                title: 'SAT Physics',
                value: 'SAT Physics',
            },
            {
                title: 'SAT Spanish Reading',
                value: 'SAT Spanish Reading',
            },
            {
                title: 'SAT Spanish with Listening',
                value: 'SAT Spanish with Listening',
            },
            {
                title: 'SAT US History',
                value: 'SAT US History',
            },
            {
                title: 'SAT World History',
                value: 'SAT World History',
            },
            {
                title: 'SAT Writing',
                value: 'SAT Writing',
            },
        ],
    },
    {
        title: 'AP',
        selectable: false,
        value: '0-1',
        children: [
            {
                title: 'AP African American Studies',
                value: 'AP African American Studies',
            },
            {
                title: 'AP Art History',
                value: 'AP Art History',
            },
            {
                title: 'AP Art: 2-D Art & Design',
                value: 'AP Art: 2-D Art & Design',
            },
            {
                title: 'AP Art: 3-D Art & Design',
                value: 'AP Art: 3-D Art & Design',
            },
            {
                title: 'AP Art: Drawing',
                value: 'AP Art: Drawing',
            },
            {
                title: 'AP Biology',
                value: 'AP Biology',
            },
            {
                title: 'AP Calculus AB',
                value: 'AP Calculus AB',
            },
            {
                title: 'AP Calculus BC',
                value: 'AP Calculus BC',
            },
            {
                title: 'AP Chemistry',
                value: 'AP Chemistry',
            },
            {
                title: 'AP Chinese Language & Culture',
                value: 'AP Chinese Language & Culture',
            },
            {
                title: 'AP Computer Science A',
                value: 'AP Computer Science A',
            },
            {
                title: 'AP Computer Science Principles',
                value: 'AP Computer Science Principles',
            },
            {
                title: 'AP Economics: Macroeconomics',
                value: 'AP Economics: Macroeconomics',
            },
            {
                title: 'AP Economics: Microeconomics',
                value: 'AP Economics: Microeconomics',
            },
            {
                title: 'AP English Language & Composition',
                value: 'AP English Language & Composition',
            },
            {
                title: 'AP English Literature & Composition',
                value: 'AP English Literature & Composition',
            },
            {
                title: 'AP Environmental Science',
                value: 'AP Environmental Science',
            },
            {
                title: 'AP European History',
                value: 'AP European History',
            },
            {
                title: 'AP French Language & Culture',
                value: 'AP French Language & Culture',
            },
            {
                title: 'AP German Language & Culture',
                value: 'AP German Language & Culture',
            },
            {
                title: 'AP Government & Politics: Comparative',
                value: 'AP Government & Politics: Comparative',
            },
            {
                title: 'AP Government & Politics: United States',
                value: 'AP Government & Politics: United States',
            },
            {
                title: 'AP Human Geography',
                value: 'AP Human Geography',
            },
            {
                title: 'AP Italian Language & Culture',
                value: 'AP Italian Language & Culture',
            },
            {
                title: 'AP Japanese Language & Culture',
                value: 'AP Japanese Language & Culture',
            },
            {
                title: 'AP Latin',
                value: 'AP Latin',
            },
            {
                title: 'AP Music Theory',
                value: 'AP Music Theory',
            },
            {
                title: 'AP Physics 1',
                value: 'AP Physics 1',
            },
            {
                title: 'AP Physics 2',
                value: 'AP Physics 2',
            },
            {
                title: 'AP Physics C - Electricity & Magnetism',
                value: 'AP Physics C - Electricity & Magnetism',
            },
            {
                title: 'AP Physics C Mechanics',
                value: 'AP Physics C Mechanics',
            },
            {
                title: 'AP Precalculus',
                value: 'AP Precalculus',
            },
            {
                title: 'AP Psychology',
                value: 'AP Psychology',
            },
            {
                title: 'AP Research',
                value: 'AP Research',
            },
            {
                title: 'AP Seminar',
                value: 'AP Seminar',
            },
            {
                title: 'AP Spanish Language & Culture',
                value: 'AP Spanish Language & Culture',
            },
            {
                title: 'AP Statistics',
                value: 'AP Statistics',
            },
            {
                title: 'AP United States History',
                value: 'AP United States History',
            },
            {
                title: 'AP World History',
                value: 'AP World History',
            },
        ],
    },
    {
        title: 'TOEFL iBT',
        value: 'TOEFL iBT',
    },
    {
        title: 'IELTS',
        value: 'IELTS',
    },
    {
        title: 'Duolingo English Test',
        value: 'Duolingo English Test',
    },
    {
        title: 'Senior Secondary Leaving Examinations',
        selectable: false,
        value: '0-8',
        children: [
            {
                title: 'International Baccalaureate Diploma (IB)',
                value: 'International Baccalaureate Diploma (IB)',
            },
            {
                title: 'Abitur',
                value: 'Abitur',
            },
            {
                title: 'Apolytirion',
                value: 'Apolytirion',
            },
            {
                title: 'Baccalaureat (BAC)',
                value: 'Baccalaureat (BAC)',
            },
            {
                title: 'Cambridge International Education Pre-University (CIE Pre-U)',
                value: 'Cambridge International Education Pre-University (CIE Pre-U)',
            },
            {
                title: 'Caribbean Advanced Proficiency Exam II (CAPE)',
                value: 'Caribbean Advanced Proficiency Exam II (CAPE)',
            },
            {
                title: 'Center Shiken or Kyotsu Tests',
                value: 'Center Shiken or Kyotsu Tests',
            },
            {
                title: 'Chinese National Entrance Examination (Gao Kao)',
                value: 'Chinese National Entrance Examination (Gao Kao)',
            },
            {
                title: 'Joint Entrance Examination (JEE)',
                value: 'Joint Entrance Examination (JEE)',
            },
            {
                title: 'College Scholastic Ability Test (CSAT)',
                value: 'College Scholastic Ability Test (CSAT)',
            },
            {
                title: 'Concurso Nacional de Acesso ao Ensino Superior (CNA)',
                value: 'Concurso Nacional de Acesso ao Ensino Superior (CNA)',
            },
            {
                title: 'Emerites Standardized Test (EmSAT)',
                value: 'Emerites Standardized Test (EmSAT)',
            },
            {
                title: 'ESLCE / EHEECE',
                value: 'ESLCE / EHEECE',
            },
            {
                title: 'European Baccalaureate',
                value: 'European Baccalaureate',
            },
            {
                title: 'GCE-Advanced Level Examinations',
                value: 'GCE-Advanced Level Examinations',
            },
            {
                title: 'Higher / Level 6',
                value: 'Higher / Level 6',
            },
            {
                title: 'Higher Secondary Certificate (HSC)',
                value: 'Higher Secondary Certificate (HSC)',
            },
            {
                title: 'Other',
                value: 'Other',
            },
        ],
    },
    {
        title: 'Other',
        value: 'Other',
    },
]
