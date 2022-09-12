const ul = document.querySelector('ul')

function gitApiGitHub() {
   fetch('https://api.github.com/users/maweterafael/repos')
      .then(async res => {
         if (!res.ok) {
            throw new Error(res.status)
         }
         var data = await res.json()
         data.map(item => {
            let li = document.createElement('li')
            li.innerHTML = `<strong>${item.name.toUpperCase()}</strong>
        <li id="name"><a href="URL : ${item.url}" target="_blank">LINKS</a></li>
        <span>Data Criação:
         ${Intl.DateTimeFormat('pt-BR')
                  .format(new Date(item.created_at))}
      </span> 
      `

            ul.appendChild(li)

         })


      }).catch(e => (console.log('e')))
}
gitApiGitHub()