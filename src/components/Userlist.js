import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Userlist({ setActiveUserId }) {//prop olarak set user id al
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .finally(() => setLoading(false))
    }, []);
    return (
        <div>
            <h2>Kullanıcılar</h2>
            {loading && <div>Yükleniyor</div>}

            <ul className='user-list'>
                {
                    users.map((user) => (
                        <li key={user.id} onClick={() => setActiveUserId(user.id)}>{user.name}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Userlist