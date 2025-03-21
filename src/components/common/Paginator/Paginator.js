import classes from './Paginator.module.css'
import {useState} from "react";
import cn from 'classnames'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged,portionSize=10, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {

      pages.push(i);

  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber,setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber-1)* portionSize+1
  let rightPortionPageNumber = portionNumber*portionSize

  return <div className={classes.paginator}>
    {portionNumber>1 &&
    <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>
    }
    {pages.filter(p=>p>= leftPortionPageNumber &&  p<=rightPortionPageNumber)
      .map(p => <span
      className={cn({[classes.selectedPage] : currentPage === p},classes.pageNumber)}
      onClick={() => {
        onPageChanged(p)
      }}>{p} </span>)}

    {portionCount>portionNumber &&
    <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>
    }
  </div>
}

export default Paginator