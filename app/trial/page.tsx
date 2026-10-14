import { CTA, SiteFooter, SiteHeader } from "../components/inner-pages";
import LeadForm from "../components/lead-form";
import "../contact/contact.css";

export default function TrialPage(){return <div className="inner-page lead-page"><SiteHeader active="trial"/>
  <section className="inner-section"><div className="inner-container inner-center"><span className="inner-label">Free Trial</span><h1 className="lead-title">Start Your Free 30-Day Trial</h1><p className="inner-muted">Read the trial terms below, then tell us about your business. Our team will contact you to confirm your setup and activate your trial.</p>
    <div className="lead-grid"><div className="lead-terms"><h3>Trial Terms</h3><dl><dt>Length</dt><dd>30 days from the day your trial account is activated.</dd><dt>Payment card</dt><dd>Not required to start the trial.</dd><dt>Who can sign up</dt><dd>Businesses evaluating AOne POS. After you submit this form, our team contacts you to confirm your hardware and setup, then activates your trial.</dd><dt>When the trial ends</dt><dd>Nothing is charged automatically — we do not take a card for the trial. To keep using AOne POS, choose a plan; otherwise the trial simply ends.</dd><dt>Cancelling</dt><dd>You can stop at any time during the trial by telling us. There is no contract.</dd></dl><p>The terms that apply to your account are confirmed in writing when your trial is activated. <a href="/pricing"><b>Compare plans</b></a> or <a href="/demo"><b>book a demo</b></a> first.</p></div><LeadForm type="trial" title="Request Your Free Trial" submitLabel="Start Free Trial" /></div>
  </div></section>
  <CTA/><SiteFooter/>
</div>}
