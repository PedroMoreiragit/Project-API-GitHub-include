 function getApiGitHub() {

  const userSelect = 'PedroMoreiragit';

  const userURL = `https://api.github.com/users/${userSelect}`;
  const repoURL = `https://api.github.com/users/${userSelect}/repos`;
  const followURL =  `https://api.github.com/users/${userSelect}/followers`;

  //Pega informações do usuário
    fetch(userURL ,{
      
    })
        .then( response => response.json())
        .then(data => {
          

          //Colocando a foto de perfil do usuário
          const userPhoto = data.avatar_url;
          document.getElementById('user-photo').src = userPhoto;

          //Pegando o nome de usuário e colocando no lugar de user
          const userName = data.name;
          document.getElementById('info').innerHTML = userName;
          

          //Pega o tipo do usuário e o exibe abaixo do nome
          const userType = data.type;
          document.getElementById('type').innerHTML = userType;

          //Pega o número de seguidores
          const userFollows = data.followers;
          document.getElementById('follows').innerHTML = userFollows

          //Pega o número de pessoas que o usuário segue
          const userFollowings = data.following;
          document.getElementById('followings').innerHTML = userFollowings

          //Pega a quantidade de repositórios públicos
          const userPublicRepositories = data.public_repos;
          document.getElementById('public-respositories').innerHTML = userPublicRepositories
          

          //Colocando um title na imagem 
          const userBio = data.bio;
          document.getElementById('bio').innerHTML =  userBio

          const profilePhoto = document.querySelector('#profile-photo');
          profilePhoto.title = userBio


    //Pega os repositórios
          
    fetch(repoURL,{
      
    })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            
            
      

            data.forEach(data =>{

            const repoName = data.name;
            const repoPrivate = data.private;
            const repoLanguage = data.language;
            const repoWatchers = data.watchers;
            const repoSize = data.size;
            const tr = document.createElement('tr');
              
            const trContent = `
                      <tr>
                      <td>${repoName}</td>
                      <td>${repoPrivate}</td>
                      <td>${repoLanguage}</td>
                      <td>${repoWatchers}</td>
                      <td>${repoSize}</td>
                      </tr>
            `;
            tr.innerHTML = trContent;
            document.querySelector('table tbody').appendChild(tr);

          });
              
            });

    //Pega os seguidores
              fetch(followURL,{
                
              })
  .then(response => response.json())
        .then(data => {

          
          //Seguidores
          const follow_0 =  data[0].login;
          const follow_1 =  data[1].login;

          document.getElementById('follow-0').innerHTML = follow_0;
          document.getElementById('follow-1').innerHTML = follow_1;
         
          

          //Pega a foto de avatar
          const avatar_0 = data[0].avatar_url;
          const avatar_1 = data[1].avatar_url;

          document.getElementById('follow-photo-0').src = avatar_0;
          document.getElementById('follow-photo-1').src = avatar_1;

        }
      )
          

        })
        .catch(error => console.error('Erro:', error));
}




getApiGitHub();