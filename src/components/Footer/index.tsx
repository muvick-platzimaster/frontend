import React, { FC } from 'react'
import { Wrapper } from '../'

/* Styles */
import { Container, Grid, Title, Anchor, Column, Row, Text } from './styles'

/* i18n */
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {
   const { t, i18n } = useTranslation(['footer'])
   const changeLanguage = (code: string) => {
      i18n.changeLanguage(code)
   }
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
                     <Anchor>FAQ</Anchor>
                     <Anchor>
                        {t('footer:faq.investor', 'Investor Relations')}
                     </Anchor>
                     <Anchor>{t('footer:faq.ways', 'Ways to Watch')}</Anchor>
                     <Anchor>{t('footer:faq.corporate', 'Corporate')}</Anchor>
                     <Anchor>
                        {t('footer:faq.originals', 'Netflix Originals')}
                     </Anchor>
                  </Column>
                  <Column>
                     <Anchor>{t('footer:faq.help', 'Help Center')}</Anchor>
                     <Anchor>{t('footer:faq.terms', 'Terms of Use')}</Anchor>
                     <Anchor>{t('footer:faq.contact', 'Contact Us')}</Anchor>
                  </Column>
                  <Column>
                     <Anchor>{t('footer:faq.account', 'Account')}</Anchor>
                     <Anchor>
                        {t('footer:faq.redeem', 'Redeem Gift Cards')}
                     </Anchor>
                     <Anchor>{t('footer:faq.privacy', 'Privacy')}</Anchor>
                     <Anchor>{t('footer:faq.speed', 'Speed Test')}</Anchor>
                  </Column>
                  <Column>
                     <Anchor>{t('footer:faq.media', 'Media Center')}</Anchor>
                     <Anchor>{t('footer:faq.buy', 'Buy Gift Cards')}</Anchor>
                     <Anchor>
                        {t('footer:faq.cookie', 'Cookie Preferences')}
                     </Anchor>
                     <Anchor>{t('footer:faq.legal', 'Legal Notices')}</Anchor>
                     <button type="button" onClick={() => changeLanguage('es')}>
                        {t('footer:faq.spanish', 'Spanish')}
                     </button>
                     <button type="button" onClick={() => changeLanguage('en')}>
                        {t('footer:faq.english', 'English')}
                     </button>
                  </Column>
               </Row>

               <Text>@Muvick</Text>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Footer
