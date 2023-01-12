export const Select = () => {

    const options = [
        { value: 'gryffindor', label: 'Gryffindor' },
        { value: 'slytherin', label: 'Slytherin' },
        { value: 'hufflepuff', label: 'Hufflepuff' },
        { value: 'ravenclaw', label: 'Ravenclaw'}
    ]

    return (
        <select name="select" id="select" style={{ padding: '0.5rem', width: '100%', outline: 'none', borderRadius: '5px' }}>
            <option value="" selected disabled>Select a house</option>
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