import React from 'react'

const Projects = async()=> {
    const username='abdullah16aug'
    const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      );
      let repos = res.data.items;
    let latestSixRepos = repos.splice(0, 6);
    return latestSixRepos;
  return (
    <div>Projects</div>
  )
}

export default Projects