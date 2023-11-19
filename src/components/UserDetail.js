import axios from 'axios';
import React, { useState, useEffect } from 'react'

function UserDetail({ activeUserId }) {
    const [user, setUser] = useState(null);//burada ilgili user hangisi ise o user in bilgisini çek sonra ata
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
            .then((res) => setUser(res.data))//gelen sonucu setuser diyerek user state ata
            .finally(() => setLoading(false));
    }, [activeUserId]);//mount anında 
    return (
        <div>
            <h2>Detaylar</h2>
            {loading && <div>Yükleniyor...</div>}
            {!loading &&
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>}
        </div>
    )
}

export default UserDetail