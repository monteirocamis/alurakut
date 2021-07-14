import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations' 




function ProfileSidebar(propriedades){
  return (
    <Box> 
    <img src={`https://www.github.com/${propriedades.githubUser}.png`} style={{ borderRadius:'8px'}}/>
  

    <hr />

    <p>
      <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}> 
        @{propriedades.githubUser}
      </a>
    </p>
 
    <hr />

    < AlurakutProfileSidebarMenuDefault />

  </Box>
  )
}



export default function Home() {
  
  const usuarioAleatorio = 'monteirocamis';
  const pessoasFavoritas = [
    'codivas',
    'juunegreiros',
    'rafaballerini',
    'clauprudente',
    'alepeglow',
    'franciane-lark',
  
    
  ]

  return (
    <>
    <AlurakutMenu />
      <MainGrid> 

    <div className="profileArea" style={{ gridArea: 'profileArea' }}>  
     <ProfileSidebar githubUser={usuarioAleatorio} />
    </div>
   
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
      <Box > 
      <h1  className="title">
      Bem vinde
      </h1>

     <OrkutNostalgicIconSet />
      </Box>


      <Box>
        <h2 className="subTitle">o que você deseja fazer?</h2>
        <form> 
          <div>
          <input placeholder="Qual será o nome da sua comunidade?" n
          ame="title" 
          aria-label="Qual será o nome da sua comunidade?"
          type="text"
          />
          </div>

          <div>
          <input placeholder="Qual a url de capa?" n
          ame="image" 
          aria-label="Qual a url de capa?"
          />
          </div>

        <button>
          Criar comunidade
        </button>
        </form>
      </Box>

    
    </div>
  
    <div className="profileRelationsArea"  style={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper> 
        <h2 className="smallTitle"> 
        pessoas da comunidade ({pessoasFavoritas.length})

        </h2>
       

        <ul> 
        {pessoasFavoritas.map((itemAtual) => {
            return (

              <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual} >

                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>

                </a>
              </li>
           
            )
         })}
         </ul>
       </ProfileRelationsBoxWrapper>

    </div>
    
   
  
       </MainGrid>
   </>
  )
   
}
