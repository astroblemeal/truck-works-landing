import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How to contact with riders emergency ?',
    contents: (
      <div>
       ...
      </div>
    ),
  },
  {
    title: 'App installation failed, how to update system information?',
    contents: (
      <div>
        ...
      </div>
    ),
  },
  {
    title: `Website response taking time, how to improve?`,
    contents: (
      <div>
        ...
      </div>
    ),
  },
  {
    title: `New update fixed all bug and issues`,
    contents: (
      <div>
        ...
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Do you have any quesitons"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
