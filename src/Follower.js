import React from 'react'

const Follower = ({data,startingPoint}) => {
  const newData = data.slice(startingPoint, startingPoint + 10);

  return(
    <section className="followers">
      <div className="container">
        {newData.map(el => {
          return(
            <article key={el.id} className="card">
              <img src={el.avatar_url} alt={el.login} />
              <h4>{el.login}</h4>
              <a href={el.html_url} rel="noopener noreferrer" target="_blank" className="btn">View Profile</a>
            </article>
          )
        })}
      </div>  
    </section>
  )
}

export default Follower
