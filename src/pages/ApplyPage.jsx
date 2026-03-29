import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const initialForm = {
  fullName: '',
  email: '',
  company: '',
  website: '',
  monthlyRevenue: '',
  monthlyAdSpend: '',
  primaryGoal: '',
  offerDescription: '',
  timeline: '',
  commitment: ''
};

const ApplyPage = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessKey: 'REPLACE_WITH_YOUR_STATICFORMS_ACCESS_KEY',
          subject: 'New Facebook Ad Management Application',
          replyTo: formData.email,
          redirectTo: '',
          ...formData
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Application submitted successfully. We will contact you soon.' });
        setFormData(initialForm);
      } else {
        setStatus({
          type: 'danger',
          message: data.message || 'Submission failed. Please verify your StaticForms setup and try again.'
        });
      }
    } catch (error) {
      setStatus({ type: 'danger', message: 'Network error. Please try again in a moment.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="apply-page">
      <Container>
        <Row className="justify-content-center">
          <Col xl={8} lg={10}>
            <div className="apply-card">
              <span className="section-badge">Application Form</span>
              <h1>Apply to hire us for Facebook ad management</h1>
              <p>
                Complete the qualification questions below. Every answer will be sent directly to your email through
                StaticForms once your access key is configured.
              </p>

              {status.message && <Alert variant={status.type}>{status.message}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control name="company" value={formData.company} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Website / Landing Page</Form.Label>
                      <Form.Control name="website" value={formData.website} onChange={handleChange} required />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Current Monthly Revenue</Form.Label>
                      <Form.Select name="monthlyRevenue" value={formData.monthlyRevenue} onChange={handleChange} required>
                        <option value="">Select one</option>
                        <option>Under $10k</option>
                        <option>$10k - $50k</option>
                        <option>$50k - $200k</option>
                        <option>$200k+</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Current Monthly Facebook/Instagram Ad Spend</Form.Label>
                      <Form.Select name="monthlyAdSpend" value={formData.monthlyAdSpend} onChange={handleChange} required>
                        <option value="">Select one</option>
                        <option>Under $3k</option>
                        <option>$3k - $15k</option>
                        <option>$15k - $50k</option>
                        <option>$50k+</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Primary growth goal for the next 90 days</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>What are you currently selling and why does it convert?</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="offerDescription"
                        value={formData.offerDescription}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>How soon do you want to start?</Form.Label>
                      <Form.Select name="timeline" value={formData.timeline} onChange={handleChange} required>
                        <option value="">Select one</option>
                        <option>Immediately</option>
                        <option>Within 2-4 weeks</option>
                        <option>Within 1-2 months</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Are you ready to commit to testing and optimization for 90+ days?</Form.Label>
                      <Form.Select name="commitment" value={formData.commitment} onChange={handleChange} required>
                        <option value="">Select one</option>
                        <option>Yes</option>
                        <option>Need more details first</option>
                        <option>No</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Button type="submit" className="btn-primary-custom" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  <Button as={Link} to="/" variant="outline-secondary">
                    Back to Landing Page
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyPage;
