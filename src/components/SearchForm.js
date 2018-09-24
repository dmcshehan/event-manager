import React from 'react';

function SearchForm (props){
  return(
      <form onSubmit={props.onSubmit}>
          <input type="text" value={props.input} placeholder="Invite Someone" onChange={props.onTypeChange}/>
          <button type="submit" name="submit" value="submit">Submit</button>
      </form>
  );
}

export default SearchForm;
