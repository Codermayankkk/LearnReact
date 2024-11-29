import { useEffect, useState } from "react";

function customHook() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    },[]);

    return [user];
}

export default customHook
