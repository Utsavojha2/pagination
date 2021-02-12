import React, {useEffect} from 'react';
/* eslint-disable */


const paginate = ({startingPoint,setStartingPoint,currentPage,setCurrentPage}) => {

    const handlePage = (e) => {
        e.preventDefault();
       const numTarget = e.currentTarget.getAttribute("data-label");
        setCurrentPage(parseInt(numTarget));
    }

    const classToggle = (num) => {
        return currentPage === num ? 'active' : ''
    }

    useEffect(() => {
        if(currentPage === 1){
            setStartingPoint(0);
        } else {
            setStartingPoint((currentPage * 10) - 10);
        }
    }, [currentPage, startingPoint])
     
return(
    <div className="pagination-section">
    <nav aria-label="...">
    <ul className="pagination">
        <li onClick={(e) => {
            e.preventDefault();
            if(currentPage > 1){
                setCurrentPage(currentPage - 1);
            }
            if(currentPage <= 1){
                setCurrentPage(10);
            }
        }} className="page-item" data-toggle="previous"><a className="page-link" href="#" tabIndex="-1">Previous</a></li>
        <li onClick={handlePage} 
            className={`page-item ${classToggle(1)}`} data-label="1"><a className="page-link" href="#">1</a></li>
        <li onClick={handlePage} 
            className={`page-item ${classToggle(2)}`} data-label="2"><a className="page-link" href="#">2</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(3)}`} data-label="3"><a className="page-link" href="#">3</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(4)}`} data-label="4"><a className="page-link" href="#">4</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(5)}`} data-label="5"><a className="page-link" href="#">5</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(6)}`} data-label="6"><a className="page-link" href="#">6</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(7)}`} data-label="7"><a className="page-link" href="#">7</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(8)}`} data-label="8"><a className="page-link" href="#">8</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(9)}`} data-label="9"><a className="page-link" href="#">9</a></li>
        <li onClick={handlePage} className={`page-item ${classToggle(10)}`} data-label="10"><a className="page-link" href="#">10</a></li>
        <li onClick={(e) => {
            e.preventDefault();
            if(currentPage < 10){
                setCurrentPage(currentPage + 1);
            }
            if(currentPage >= 10){
                setCurrentPage(1);
            }
        }} className="page-item" data-toggle="next"><a className="page-link" href="#">Next</a></li>
    </ul>
    </nav>
    </div>
    )
}

export default paginate
