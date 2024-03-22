/* eslint-disable react/prop-types */

const Filter = ({ searchText, handleSearchTextChange }) => {
    return (
        <div style={{ marginBottom: "20px" }}>Filter shown with
            <input type="text" value={searchText} onChange={handleSearchTextChange} />
        </div>)
}

export default Filter