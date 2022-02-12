import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import LeftSection from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Website
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established
        developers to take their development skills to the next level and build
        awesome apps.
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com/')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
