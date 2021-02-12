import React, { useState} from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import Utils from '../src/utils';
function App() {
  const [currentPage,setCurrentPage] = useState(1); // pagination page
  const [startingPoint, setStartingPoint] = useState(0); // array starting index
  const {loading,data} = useFetch();

  return !loading ? ( 
     <main>
       <div className="section-title">
         <h1>pagination</h1>
         <div className="underline"></div>
       </div>
       <Follower startingPoint={startingPoint} data={data} />
       <Utils data={data} startingPoint={startingPoint} setStartingPoint={setStartingPoint} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
     </main>
  ) : (
    <div className="loader"></div>
  )
}

export default App
