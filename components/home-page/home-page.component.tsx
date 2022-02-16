import {ButtonComponent, H2} from '@lib/index';
import {Container, Grid} from '@mui/material';
import Image from 'next/image';
import React, {FC} from 'react';
import styles from './home-page.module.scss';
import BecomePartnerComponent from './sub-components/become-partner.component';
import BannerComponent from './sub-components/banner.component';
import VideoPartComponent from './sub-components/video-part.component';
import ProcessComponent from './sub-components/process.component';
import WhyAgentsComponent from './sub-components/why-agents.component';
import EverythingDashboardComponent from './sub-components/everything-dashboard.component';
import WorkingWithComponent from './sub-components/working-with.component';
import TestimonialComponent from './sub-components/testimonial.component';
import AgentLovesComponent from './sub-components/agent-loves.component';
import PricingPlanComponent from './sub-components/pricing-plan.component';

const HomePageComponent: FC = () => {
  return (
    <>
      <BannerComponent />
      <VideoPartComponent/>
      <ProcessComponent/>
      <WhyAgentsComponent/>
      <EverythingDashboardComponent/>
      <AgentLovesComponent/>
      <BecomePartnerComponent />
      <PricingPlanComponent/>
      <TestimonialComponent/>
      <WorkingWithComponent/>
    </>
  );
};

export default HomePageComponent;
