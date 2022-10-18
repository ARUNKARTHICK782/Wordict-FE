function formatter(user,code)
{
    const fuser = {};
    if(code == 1)
    {
        fuser["name"] = user.name;
        fuser["email_id"] = user.username;
        fuser["password"] = user.password;
    }
    else
    {
        fuser["email_id"] = user.username;
        fuser["password"] = user.password;
    }
    return fuser;
}

export default formatter;