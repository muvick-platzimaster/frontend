import React, { FC } from 'react'
import { Wrapper } from '../'

/* components */
import LanguageButton from '../LanguageButton/index'

/* Styles */
import {
   Container,
   Grid,
   Title,
   LinkAnchor,
   Anchor,
   Column,
   Row,
   Text
} from './styles'

/* i18n */
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {
   const { t } = useTranslation(['footer'])

   return (
      <Container>
         <Wrapper>
            <Grid>
               <Title>
                  {t('footer:faq.questions', 'Questions? Call')}
                  <Anchor href="tel:57 321 231 24">+57 320 843 57 39</Anchor>
               </Title>
               <Row>
                  <Column>
                     <Text>
                        {t(
                           'footer:description',
                           'Muvick es una plataforma de streaming on demand donde cada usuario puede ver sus películas y series favoritas y puede obtener recomendaciones dependiendo de sus películas o series vistas.'
                        )}
                     </Text>
                  </Column>
                  <Column>
                     <LinkAnchor to="/">{t('footer:home', 'Home')}</LinkAnchor>
                     <Anchor href="https://help.netflix.com/legal/termsofuse">
                        {t('footer:list', 'Terms of Use')}
                     </Anchor>
                  </Column>
                  <Column>
                     <Anchor href="https://help.netflix.com/legal/privacy">
                        {t('footer:privacy', 'Privacy')}
                     </Anchor>
                     <Anchor href="https://github.com/muvick-platzimaster">
                        {t('footer:about', 'About')}
                     </Anchor>
                  </Column>
               </Row>
               <LanguageButton />
               <Text>@Muvick</Text>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Footer
