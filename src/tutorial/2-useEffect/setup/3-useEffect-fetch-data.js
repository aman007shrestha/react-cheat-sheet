import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const removeId = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    console.log(id);
    console.log('hi');
  };
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };
  useEffect(() => {
    console.log('useEffect run');
    getUsers();
  }, []);
  return (
    <div style={{ margin: '2.5rem 0' }}>
      <h3>3. Fetch Data</h3>
      <p>
        Note: users is a state of empty array. getUsers() which is a
        asynchronous function, fetches users from url using async await.
        useEffect call getUsers at initial render. users is mapped for each user
        using .map funtion.
      </p>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <div key={id}>
              <li>
                <img src={avatar_url} width='200px' height='auto' alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>profile</a>
                </div>
                <button
                  type='button'
                  className='btn'
                  onClick={() => removeId(id)}
                >
                  remove
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
