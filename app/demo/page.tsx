import { CTA, SiteFooter, SiteHeader } from "../components/inner-pages";
import LeadForm from "../components/lead-form";
import "../contact/contact.css";

export default function DemoPage(){return <div className="inner-page lead-page"><SiteHeader active="demo"/>
  <section className="inner-section"><div className="inner-container inner-center"><span className="inner-label">Book A Demo</span><h1 className="lead-title">Book A 20-Minute Demo</h1><p className="inner-muted">See AOne POS running on your own products. Tell us about your business and our team will contact you to schedule a time.</p>
    <div className="lead-grid"><div className="lead-terms"><h3>What To Expect</h3><dl><dt>20 minutes</dt><dd>A live walkthrough with your products, your prices and your questions — and a straight answer on whether we fit.</dd><dt>Bring your catalogue</dt><dd>Send us a CSV of your catalogue before the call and we will load it in.</dd><dt>Scheduling</dt><dd>After you submit this form, our team contacts you to agree a time that suits you.</dd></dl><p>Want to try it yourself instead? <a href="/trial"><b>Start a free trial</b></a>. Have a general question? <a href="/contact#contact-form"><b>Contact us</b></a>.</p></div><LeadForm type="demo" title="Request Your Demo" submitLabel="Request Demo" /></div>
  </div></section>
  <CTA/><SiteFooter/>
</div>}
