interface FieldsProps {
    score: string
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function SATFields({ score, handleInput }: FieldsProps) {
    if (score === 'NULL' || score === '') return null

    return (
        <>
            <p>SAT Highest evidence-based reading and writing score</p>
            <input
                type="number"
                id="sat_read"
                name="sat_read"
                min={0}
                max={800}
                onChange={handleInput}
            ></input>
            <p>SAT Highest math score</p>
            <input
                type="number"
                id="sat_math"
                name="sat_math"
                min={0}
                max={800}
                onChange={handleInput}
            ></input>
            <p>SAT Highest combined essay score</p>
            <input
                type="number"
                id="sat_essay"
                name="sat_essay"
                min={0}
                max={24}
                onChange={handleInput}
            ></input>
        </>
    )
}

export function ACTFields({ score, handleInput }: FieldsProps) {
    if (score === 'NULL' || score === '') return null

    return (
        <>
            <p>ACT Highest english score</p>
            <input
                type="number"
                id="act_eng"
                name="act_eng"
                min={0}
                max={36}
                onChange={handleInput}
            ></input>
            <p>ACT Highest math score</p>
            <input
                type="number"
                id="act_math"
                name="act_math"
                min={0}
                max={36}
                onChange={handleInput}
            ></input>
            <p>ACT Highest reading score</p>
            <input
                type="number"
                id="act_read"
                name="act_read"
                min={0}
                max={36}
                onChange={handleInput}
            ></input>
            <p>ACT Highest science score</p>
            <input
                type="number"
                id="act_sci"
                name="act_sci"
                min={0}
                max={36}
                onChange={handleInput}
            ></input>
            <p>ACT Highest writing score</p>
            <input
                type="number"
                id="act_write"
                name="act_write"
                min={2}
                max={12}
                onChange={handleInput}
            ></input>
        </>
    )
}
