import { useState, useEffect } from "react";
import "./supportPortal.style.scss";

const Portal = () => {
    const [parentCateg, setParentCateg] = useState([]);
    const [categ, setCateg] = useState(parentCateg);
    const [parentCategId, setParentCategId] =useState('');

    const [githubUser, setGithubUser] = useState("JayashreeBiswas")
    const [githubData, setGithubData] = useState([])
    
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic dHNhZGQwbTQ2ZDh2Y25ob3AwcHd5aTllcG1zcG0zcXZoMmw5cjBobTFsOWQ1a28zOW4=");
myHeaders.append("Cookie", "JSESSIONID=7928DCE812354D907797D71CF7FC75B4.worker1; _KAPTURECRM_SESSION=\"\"");

var formdata = new FormData();

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

useEffect(() => {
    fetch("https://nykaa.kapturecrm.com/get-all-faq-categories.html", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const res = result.message.category;
    setParentCateg(res);
    // console.log(parentCateg);
})
  .catch(error => console.log('error', error));
}, []);

useEffect(()=>{
    console.log(parentCategId);
    const newCateg = parentCateg.filter((parentCateg) => {

    });
    
}, [parentCateg, parentCategId])

const getCateg = (event) => {
    const pId = event.target.value;
    console.log(pId)
    setParentCategId(pId);
    // console.log(parentCategId);
}

useEffect(() => {
    fetchData()
  }, [])
const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data)
        console.log(githubData)
    });
  }
 
    
    return(
        <>
            <h1>Hello Portal</h1>
            <div className="catgeoryCard-container">
                {
                    parentCateg.map((parentCat) =>  {
                        // console.log(parentCat)
                        if(parentCat.parentCategoryName == "Nykaa FAQ's"){
                                return (<div className="catgeoryCard" key={parentCat.id}>
                                    <button type="button" onClick={getCateg} value={parentCat.name}>{parentCat.name}</button>
                                    </div>);
                            }
                    })
                }
                
            </div>

            <input type="text" placeholder="Search for User" onChange={(e) => setGithubUser(e.target.value)} className="input_search" />
            <button onClick={fetchData} className="search_button">Search Github</button>
                {console.log(githubData.avatar_url)}
            <img src={githubData.avatar_url} height="100" width="100" />
            <p>{githubData.name}</p>
        </>
    );
}

export default Portal;