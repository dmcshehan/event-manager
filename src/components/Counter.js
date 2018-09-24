import React from 'react';


function Counter (props){
  return(
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Counter;
