import React from 'react'

/* Components */
import { Footer, InputForm, Title, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Containers */
import NavContainer from '../containers/Nav'
import ListsContainer from '../containers/Lists'

function Browse(): JSX.Element {
   return (
      <>
         <NavContainer>
            <Title>Nombre de Película</Title>

            <InputForm>
               <Wrapper maxWidth={breakpoints.md}>
                  <InputForm.Button>
                     <InputForm.Text>Reproducir</InputForm.Text>
                     <InputForm.Icon />
                  </InputForm.Button>
                  <InputForm.Button>
                     <InputForm.Text>Más información</InputForm.Text>
                     <InputForm.Icon />
                  </InputForm.Button>
               </Wrapper>
            </InputForm>
         </NavContainer>
         <ListsContainer />
         <Footer />
      </>
   )
}

export default Browse
