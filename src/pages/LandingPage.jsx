import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const features = [
  'Full-funnel Facebook + Instagram strategy',
  'Creative direction and ad copy systems',
  'Fast testing cycles with weekly iteration',
  'Clear reporting and budget planning'
];

const subscriptions = [
  {
    title: 'Starter Growth',
    price: '$1,500/mo',
    description: 'For new brands needing structure, launch support, and first winning campaigns.',
    items: ['Up to $8k ad spend', 'Weekly optimization', 'Creative feedback', 'Monthly strategy call']
  },
  {
    title: 'Scaling Core',
    price: '$2,900/mo',
    description: 'For established brands ready to scale ad spend with stable conversion systems.',
    items: ['Up to $30k ad spend', 'Bi-weekly strategy calls', 'Landing page CRO guidance', 'KPI dashboard']
  },
  {
    title: 'Performance Plus',
    price: '$4,500/mo',
    description: 'For serious growth teams wanting aggressive testing and full media ownership.',
    items: ['Up to $80k ad spend', 'Creative sprint support', 'Audience architecture', 'Attribution review']
  },
  {
    title: 'Elite Partnership',
    price: 'Custom',
    description: 'For brands with complex funnels requiring dedicated expert support and consulting.',
    items: ['Multi-market campaigns', 'Dedicated growth lead', 'Executive reporting', 'Custom automations']
  }
];

const testimonials = [
  {
    quote: 'We cut CPA by 37% in 90 days and finally had a roadmap we could trust.',
    author: 'A. Rivera',
    company: 'DTC Beauty Brand'
  },
  {
    quote: 'Our creative testing process now feels scientific. Results became predictable.',
    author: 'K. Morgan',
    company: 'Health Supplement Company'
  },
  {
    quote: 'The clarity around metrics and spend pacing changed how our whole team makes decisions.',
    author: 'S. Lee',
    company: 'Online Education Platform'
  }
];

const caseStudies = [
  {
    name: 'Case Study 01',
    result: '2.4x ROAS increase',
    summary: 'Rebuilt campaign structure and creative hooks for a niche apparel store in 60 days.'
  },
  {
    name: 'Case Study 02',
    result: '42% lower CPL',
    summary: 'Implemented lead pre-qualification and retargeting ladder for a B2B service brand.'
  },
  {
    name: 'Case Study 03',
    result: '$180k new revenue',
    summary: 'Introduced offer-focused messaging + pacing strategy for a digital product launch.'
  }
];

const processSteps = [
  'Apply and complete our qualification form',
  'Get a strategy review and fit assessment call',
  'Receive your custom launch plan and timeline',
  'Go live and scale with weekly optimization'
];

const dropdownQuestions = [
  {
    q: 'What makes your Facebook ad management approach different?',
    a: 'We combine media buying, conversion strategy, and creative direction in one system. You get execution plus strategic clarity, not just ad tweaks.'
  },
  {
    q: 'Who is this best for?',
    a: 'Brands with proven products and healthy margins who want structured scaling. Early-stage companies can also fit if they are prepared for testing and iteration.'
  },
  {
    q: 'How quickly can we expect traction?',
    a: 'Most accounts see meaningful signal improvement in the first 30–45 days, followed by stronger growth as creative data compounds.'
  },
  {
    q: 'Do you work with in-house teams?',
    a: 'Yes. We can integrate with founders, marketers, designers, and media buyers to support or co-lead execution.'
  }
];

const LandingPage = () => (
  <div className="landing-page">
    <section className="hero-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <span className="hero-badge">Performance Facebook Ads</span>
            <h1>Scale your revenue with a cleaner, smarter Facebook ad system.</h1>
            <p>
              Placeholder hero copy: We help brands build predictable customer acquisition with strategic media buying,
              high-performing creative testing, and clear reporting your team can use.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button as={Link} to="/apply" className="btn-primary-custom">Apply to Work With Us</Button>
              <Button variant="outline-light" className="btn-outline-custom">See How It Works</Button>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero-panel">
              <h5>What you get</h5>
              <ul>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section-block">
      <Container>
        <SectionHeader
          badge="How It Works"
          title="A simple process built for serious growth"
          subtitle="We keep execution clear, collaborative, and performance-focused from day one."
        />
        <Row className="g-4">
          {processSteps.map((step, index) => (
            <Col md={6} lg={3} key={step}>
              <Card className="process-card">
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section className="section-block alt-bg">
      <Container>
        <SectionHeader
          badge="Features"
          title="Everything needed to improve ad performance"
          subtitle="Placeholder content for your final messaging and specific service deliverables."
        />
        <Row className="g-4">
          {['Advanced audience strategy', 'Creative testing frameworks', 'Budget pacing and scaling', 'Weekly performance diagnostics'].map(
            (item) => (
              <Col md={6} key={item}>
                <Card className="feature-card">
                  <h5>{item}</h5>
                  <p>
                    Placeholder supporting text: add details about your unique method, implementation style, and the
                    value clients receive.
                  </p>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>

    <section className="section-block">
      <Container>
        <SectionHeader
          badge="Subscriptions"
          title="Choose from four management plans"
          subtitle="Each tier is flexible and can be tailored once we review your account goals."
        />
        <Row className="g-4">
          {subscriptions.map((plan) => (
            <Col md={6} xl={3} key={plan.title}>
              <Card className="plan-card h-100">
                <h5>{plan.title}</h5>
                <h3>{plan.price}</h3>
                <p>{plan.description}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section className="section-block alt-bg">
      <Container>
        <SectionHeader badge="Social Proof" title="Testimonials" subtitle="Placeholder client wins and feedback." />
        <Row className="g-4 mb-5">
          {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.author}>
              <Card className="quote-card h-100">
                <p>“{testimonial.quote}”</p>
                <h6>{testimonial.author}</h6>
                <span>{testimonial.company}</span>
              </Card>
            </Col>
          ))}
        </Row>

        <SectionHeader badge="Results" title="Three case studies" subtitle="Use this space to showcase detailed proof later." />
        <Row className="g-4">
          {caseStudies.map((study) => (
            <Col md={4} key={study.name}>
              <Card className="case-card h-100">
                <span>{study.name}</span>
                <h5>{study.result}</h5>
                <p>{study.summary}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section className="section-block">
      <Container>
        <SectionHeader
          badge="Questions"
          title="Expandable Q&A"
          subtitle="A dropdown-style section instead of a traditional FAQ layout."
        />
        <Accordion defaultActiveKey="0" className="custom-accordion">
          {dropdownQuestions.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={item.q}>
              <Accordion.Header>{item.q}</Accordion.Header>
              <Accordion.Body>{item.a}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>

    <section className="section-block alt-bg">
      <Container>
        <div className="summary-box">
          <h3>Summary Section (Placeholder)</h3>
          <p>
            This bottom section is reserved for your final summary message. You can later refine this with final
            positioning, offer details, and any trust-building content you want highlighted before the closing CTA.
          </p>
        </div>
      </Container>
    </section>

    <section className="cta-section">
      <Container>
        <h2>Ready to get started?</h2>
        <p>Apply now to see if we are the right partner to manage and scale your Facebook ads.</p>
        <Button as={Link} to="/apply" className="btn-primary-custom">Apply for Management</Button>
      </Container>
    </section>

    <footer className="site-footer">
      <Container>
        <p>Footer Placeholder — final footer content coming in milestone two.</p>
      </Container>
    </footer>
  </div>
);

export default LandingPage;
