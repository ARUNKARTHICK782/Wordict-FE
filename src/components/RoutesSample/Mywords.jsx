import axios from "axios";
import React,{Component} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import apiEP from '../../common/credentials';
import WordComponent from "../WordComponent";
import '../RoutesSample/sample.css';
import FoldersList from "../FoldersList";
import Pagination from "../../common/pagination";
import { paginate } from "../../Utils/paginate";
import {getWordsFromFolder,getFoldersList} from '../../apihandlers';


class Mywords extends Component {
    state = { 
        mywords : [],
        loading : true,
        currentPage : 1,
        selectedFolder : "",
        myfolders : []
     } 
    async componentDidMount()
    {
        Aos.init({duration:2000});
        const token = localStorage.getItem('token');
        let mywords;
        await axios({
            method: 'get',
            url: apiEP+'api/users/mywords',
            headers: {'x-auth-token': token},
          }).then(function(res){
                mywords = res.data;
                console.log(res.data);
            });
        const myfolders = await getFoldersList();
        this.setState({mywords,loading:false,myfolders});
        
    }

    handlePageChange = (page) =>{
        this.setState({currentPage:page});
    }

    handleFolderChange = async (e) =>{
        // console.log("Clicked");
        // console.log(e.target.id);
        var wordsInFolder = await getWordsFromFolder(e.target.id);
        console.log("Success");
        console.log(wordsInFolder);
        this.setState({selectedFolder:e.target.id,mywords:wordsInFolder,currentPage:1});
    }


    render() { 
        const PmyWords = paginate(this.state.mywords,this.state.currentPage,10);
        try{
            if(this.state.mywords.length == null)
            return <p>No words to show</p>;
        }
        catch(e){
            return <p>No words to show</p>;
        }
        return (
            <div style={{margin:"90px",marginTop:"100px"}}>
                {(this.state.loading)?<div className="loader"></div>:
                <div className="flexContainer">
                    <div className="foldersListInMyWords">
                        <FoldersList folderFunc={this.handleFolderChange} currentActiveFolder = {this.state.selectedFolder} myfolders={this.state.myfolders} showSaveBtn={false}/>
                    </div>
                    <div className="balaDiv">
                        <div className="mywordsmaindiv">
                            {(this.state.mywords.length === 0)?<p>No Words To Show</p>:PmyWords.map(e=>
                                <div data-aos="fade-up" key={e.word_id}>
                                    {/* {console.log(e)} */}
                                    <WordComponent myword={e}/>
                                </div>
                            )}
                        </div>
                        <div className="paginationDiv">
                            <Pagination itemCount={this.state.mywords.length} currentPage={this.state.currentPage} noOfPages={10} onPageChange={this.handlePageChange}/>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
 
export default Mywords;