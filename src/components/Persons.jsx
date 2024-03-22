import React from 'react'

const Persons = ({ persons, searchText }) => {
    return (
        <div>
            {persons
                .filter((person) => person.name.toLowerCase()
                    .includes(searchText.toLowerCase()))
                .map((person, i) =>
                    <h3 key={i}>{person.name} {person.number}</h3>
                )}
        </div>

    )
}

export default Persons