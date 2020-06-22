import React from "react";
//import SearchForm from "../SearchForm/SearchForm";

import Hero from "react-bulma-components/lib/components/hero";
import Heading from "react-bulma-components/lib/components/heading";
import Section from "react-bulma-components/lib/components/section";
import Container from "react-bulma-components/lib/components/container";
import classNames from "./Header.module.css";

const { Body } = Hero;

function Header(props) {
  return (
    <header className={classNames.header}>
      <Section>
        <Hero>
          <Body>
            <Container>
              <Heading
                className={`${classNames.title} has-text-centered has-text-white`}
              >
                Plan Your Events
              </Heading>
              <Heading
                subtitle
                size={4}
                className={`${classNames.subTitle} has-text-centered has-text-white`}
              >
                With Easy To Use UI
              </Heading>
            </Container>
          </Body>
        </Hero>
      </Section>
    </header>
  );
}

export default Header;
