/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import Section, { Content } from "containers/core/Section";
import { ROUTE_COMMUNITY } from "config/routes/mappings";
import { H1 } from "atoms/core/html-elements";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { sectionIdFor } from "utils";

import WaveDivider from "./styled/WaveDivider";
import CommunityCohesion from "./styled/CommunityCohesion";

const SECTION_ID = sectionIdFor(ROUTE_COMMUNITY, 0);

/**
 * The component that represents the hero section of the community page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SectionHero = () => (
  <Section decorated id={SECTION_ID}>
    <Content centered decorated>
      <FeatureDuo>
        <Text>
          <Headline as={H1} large>
            Join the growing Nord community.
          </Headline>
          <Subline>
            Keep up to date with upcoming releases and events, community-built projects, helpful resources and the
            latest news. Join chat channels like Slack or browse content and knowledge bases like Stack Overflow for
            help with any Nord questions you might have.
          </Subline>
        </Text>
        <Visualization>
          <CommunityCohesion />
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

export default SectionHero;
