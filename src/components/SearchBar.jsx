import React from 'react';

function SearchBar(props) {
const handleChange = (event) => {
props.setSearchTerm(event.target.value);
}

return(
<form>
<input type="text" placeholder="Search" value={props.searchTerm} onChange={handleChange} />
</form>
)
}
export default SearchBar;