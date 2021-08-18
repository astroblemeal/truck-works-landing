import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Features from 'sections/features';
import Widgets from 'sections/widgets';
import Contact from 'sections/contact';
// import UltimateFeatures from 'sections/ultimate-features';
// import IntroVideo from 'sections/intro-video';
// import UsefulFeatures from 'sections/useful-features';
// import Pricing from 'sections/pricing';
// import Faq from 'sections/faq';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Truck Works" />
        <Banner />
        <Widgets />
        <Features />

        <Contact />

      </Layout>
    </ThemeProvider>
  );
}
