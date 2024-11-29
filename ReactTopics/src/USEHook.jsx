import React from 'react';
import customHook from './customHook';

function USEHook() {
 
  const [user] = customHook();

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
            user.map((u)=> {
              return  <li key={u.id}>
                   <a href={u.html_url}>{u.login}</a>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default USEHook
