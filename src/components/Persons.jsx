/* eslint-disable react/prop-types */

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