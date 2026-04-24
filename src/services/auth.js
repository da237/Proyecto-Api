export  function register(user){
    const users =  JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
}


export function login(email,password){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    } else {
        throw new Error('Invalid email or password');
    }

}