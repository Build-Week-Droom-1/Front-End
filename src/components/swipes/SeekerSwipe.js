import React, {useEffect, useState} from "react";
import JobSwipeCard from "./JobSwipeCard";
import SwipeNav from "./SwipeNav";
import axios from "axios";



const SeekerSwipe = () => {

  const [jobs, setJobs] = useState([]);
  const [ix, setIx] = useState(0);
 

  useEffect(() => {
    axios.get("https://droom-project-lambda.herokuapp.com/api/jobs")
      .then(res => setJobs(res.data.jobs))
      .catch(err => console.log(err));
  }, []);

  const showNextCard = () => {
    setIx(ix + 1);
  }


  return (
    
    <div>
      
      {(jobs.length === 0) ? <h1>loading...</h1> : (ix + 1 > jobs.length) ? <h1>No more new jobs!</h1> : <div><JobSwipeCard cardDeck ={jobs} currentCard={ix} /> 
     
      <SwipeNav showNextCard={showNextCard} /></div>}
    </div>
  );
};

export default SeekerSwipe;
