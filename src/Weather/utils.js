const baseUrl = process.env.REACT_APP
export const weather = async({username, password}) => {
    try{
        const response = await fetch(`${baseUrl}/auth/login`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username, password})
        });
        return response.json();
    }
    catch(error){
        return      `Error during login: ${error.message}`
    }
};
