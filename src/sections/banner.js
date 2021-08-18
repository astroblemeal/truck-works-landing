import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import banner from 'assets/images/banner.jpg';
import paypal from 'assets/images/paypal.png';
import google from 'assets/images/google.png';
import dropbox from 'assets/images/dropbox.png';
import { NavLink } from 'components/link';

const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
             Truck Works Ltd. an experienced and dynamic haulage & logistics specialist.
            </Heading>
            {/*<Text as="p" sx={styles.text}>
             text
            </Text>*/}
          <div style={{display: "flex"}}>
            <Button  variant="primary" sx={styles.button}>
            <a style={{textDecoration: "none", color: "white"}} href="mailto:info@truckworks.co.uk">Email Us</a>
            </Button>
            <Button style={{marginLeft: "10px"}}  variant="primary" sx={styles.button}>
             <a style={{textDecoration: "none", color: "white"}} href="tel:07798947762">Phone Us</a>
            </Button>
          </div>
            {/*<Box sx={styles.clients}>
              <Image src={paypal} alt="paypal" />
              <Image src={google} alt="google" />
              <Image src={dropbox} alt="dropbox" />
            </Box>*/}
          </Box>

          <Box  sx={styles.illustration}>
            <Image style={{borderRadius: "5px",  border: "1px solid #ddd", padding: "10px"}} width={800} height={900}  src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};


export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '40px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
    },
  },
};
