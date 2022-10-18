import React,{Component} from "react";
import {useParams} from 'react-router-dom';

function WordsInFolder()
{
    const {id} = useParams();
    return (
        <div>
            <h3>Words in folder {id}</h3>
        </div>
    );
}
 
export default WordsInFolder;