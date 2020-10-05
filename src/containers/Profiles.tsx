import React, { FC, Fragment } from 'react'
import { Header, Wrapper } from '../components'
import { breakpoints } from '../styles/theme'

const ProfilesContainer: FC = () => {
   return (
      <Fragment>
         <Header bg={false}>
            <Wrapper maxWidth={breakpoints.xl}>
               <Header.Grid>
                  <Header.Logo />
               </Header.Grid>
            </Wrapper>
         </Header>
      </Fragment>
   )
}

export default ProfilesContainer
