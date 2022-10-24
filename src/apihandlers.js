import axios from 'axios';
import apiEP from './common/credentials';
export async function searchWord(word)
{
    const token = localStorage.getItem('token');
    var meanings=[];
    await axios({
        method: 'get',
        // https://wordictserver.herokuapp.com/api/search/word
        url: apiEP+'api/search/'+word,
        headers: {'x-auth-token': token},
      }).then(function(res){
            if(res.data === "No meanings found")
                return "No meanings found";
            meanings = res.data;
        });
    console.log(meanings);
    return meanings;  
}

export async function getToken()
{
    const token = localStorage.getItem('token');
    // console.log(token);
    return token;
}

export async function getFoldersList()
{
    const token = await getToken();
    let myfolders = [];
    await axios({
        method:'get',
        url:apiEP+'api/users/myfolders',
        headers:{'x-auth-token':token}
    }).then((res)=>{
        // console.log(res.data);
       myfolders = res.data;
    });
    return myfolders;
}


export async function addWordToFolder(fid,wid)
{
    const token = await getToken();
    await axios({
        method:'post',
        url:apiEP+'api/folders/new-word',
        data:{folder_id:fid,word_id:wid},
        headers:{'x-auth-token':token}
    }).then((res)=>{
        // console.log(res.data);
       console.log(res.data);
    });
}

export async function getWordsFromFolder(fid)
{
    const token = await getToken();
    var twords = [];
    await axios({
        method:'get',
        url:apiEP+'api/users/myfolders/'+fid,
        headers:{'x-auth-token':token}
    }).then((res)=>{
        twords = res.data;
        // return res.data.word_id;
    });
    return twords;
    
}
