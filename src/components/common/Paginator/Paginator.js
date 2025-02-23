import classes from './Paginator.module.css'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 20) {
      pages.push(i);
    }
  }
  return <div>
    {pages.map(p => <span
      className={currentPage === p && classes.selectedPage}
      onClick={() => {
        onPageChanged(p)
      }}>{p}</span>)}
  </div>
}

export default Paginator