function getProjects(){
   const urlGitHub = 'https://www.linkedin.com/in/carloshenrique-web/'

   fetch(urlGitHub, {
      method: 'GET'
   })
      .then((response) => response.json())
      .then((response) => {
         console.log(response)
      })
      .catch((e) => {
         console.log(e)
      })
}

getProjects()