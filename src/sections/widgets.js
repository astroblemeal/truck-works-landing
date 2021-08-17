/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import banner from 'assets/images/logo1.png';
import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';

const Widgets = () => {
  return (
    <Box as="section" id="widgets" variant="section.widgets">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image width={400} height={400} src={banner} alt="widgets" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="About Us"
              description="Our management team have a combined 50 years + pedigree in the transport sector at senior management level.
              We understand the current turmoil facing the logistics industry, yet we still provide certainty in these uncertain times. Truck works can tailor bespoke solutions with a professional and competitive edge.
              We are a customer-service driven company and take pride in the ranges of products we can deliver. Our services are fully comprehensive from start to finish."
            />
            {/*<Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              one
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
             two
            </Text>*/}
            {/*
            <Box sx={styles.explore}>
              <LearnMore path="#!" label="Explore More" />
            </Box>
            */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Widgets;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, 0, 0, '-70px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '40px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
