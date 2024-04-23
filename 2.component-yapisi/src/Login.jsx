import React from 'react'

export const users = [
    {
        username: "Enes",
        password: "1234"
    },
    {
        username: "Aysenur",
        password: "2"
    },

]

function Login() {
    return (
        <>
            <div>
                <p>Kulllanıcı adiniz</p>
                <input type="text" />
            </div>
            <div>
                <p>sifreniz</p>
                <input type="text" />
            </div>

            <div>
                <button>Giris</button>
            </div>
        </>
    )
}

export default Login