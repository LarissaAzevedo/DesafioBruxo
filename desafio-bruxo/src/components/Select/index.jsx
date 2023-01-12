import { useEffect, useState } from "react"

export const Select = ({ setCharacters }) => {

    const [house, setHouse] = useState('')

    function handleSelectChange(e) {
        setHouse(e.target.value)
    }

    let api = `https://hp-api.onrender.com/api/characters/house/${house}`

    useEffect(() => {
        house !== '' && fetch(api).then(resp => resp.json()).then(data => setCharacters(data))
    }, [api])

    const options = [
        { value: 'gryffindor', label: 'Gryffindor' },
        { value: 'slytherin', label: 'Slytherin' },
        { value: 'hufflepuff', label: 'Hufflepuff' },
        { value: 'ravenclaw', label: 'Ravenclaw'}
    ]

    return (
        <select 
            name="select" 
            id="select" 
            style={{ padding: '0.5rem', width: '100%', outline: 'none', borderRadius: '5px' }}
            onClick={handleSelectChange}
        >
            {
                options.map((data, index) => {
                    return (
                        <option value={data.value} key={index}>{data.label}</option>
                    )
                })
            }
        </select>
    )
}