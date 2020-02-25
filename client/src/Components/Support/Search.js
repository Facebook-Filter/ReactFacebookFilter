import React from 'react';
import './search.css'

const Search = (props) => {
    return (
        <div className="search_div">
            <form onSubmit={props.onSearchSubmit}>
                <input className="search_bar" type="text" placeholder="Ask Question Here..." onChange={props.handleChangeQuestion} /><br></br>
                <button className='search_btn' type="submit" onSubmit={props.handleChangeQuestion}>Ask</button>
            </form>
        </div>
    )
}

export default Search;