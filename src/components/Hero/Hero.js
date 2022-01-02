import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;