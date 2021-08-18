import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Features from 'sections/features';
import IntroVideo from 'sections/intro-video';
import UsefulFeatures from 'sections/useful-features';
import Widgets from 'sections/widgets';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';
<<<<<<< HEAD
import Contact from 'sections/contact';
=======
>>>>>>> 18621bbdf97522a24fc9c86be206a30c3754a57f

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Truck Works Ltd" />
        <Banner />
        <Widgets />
        <Features />
<<<<<<< HEAD
        <Contact />
=======
>>>>>>> 18621bbdf97522a24fc9c86be206a30c3754a57f
      </Layout>
    </ThemeProvider>
  );
}
