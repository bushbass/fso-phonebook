/* eslint-disable react/prop-types */

const Persons = ({ persons, searchText, deletePerson }) => {
    return (
        <div>
            {persons
                .filter((person) => person.name.toLowerCase()
                    .includes(searchText.toLowerCase()))
                .map((person, i) =>
                    <h3
                        key={i}>{person.name} {person.number}
                        <button className="delete-button" onClick={() => deletePerson(person.id)}>Delete {person.id}</button>
                    </h3>
                )}
        </div>

    )
}

export default Persons