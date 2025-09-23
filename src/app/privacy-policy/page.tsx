import { Header } from "@/components/sections"
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#F6F4F1' }}>
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Epic — Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-sm text-gray-600">
              <strong>Effective date:</strong> September 23, 2025<br/>
              <strong>Controller:</strong> <strong>Catchy Assessoria Empresarial LTDA</strong>, CNPJ <strong>56.221.911/0001-01</strong>, registered office at <strong>Av. Eng. Luiz Carlos Berrini, 155–255, Torre Kansas, ZIP 04571-900, São Paulo/SP, Brazil</strong>.<br/>
              <strong>Data Protection Officer (DPO):</strong> <strong>Deborah Barreira Folloni</strong> — <Link href="mailto:deb@donoshq.com" className="text-blue-600 hover:underline">deb@donoshq.com</Link>
            </p>

            <p>
              This Privacy Policy explains how <strong>Epic</strong> (the "Service") collects and processes personal data through the <strong>goepic.dev</strong> website, applications, and integrations. We comply with <strong>Brazil's General Data Protection Law (LGPD – Law No. 13,709/2018)</strong>, the <strong>Brazilian Internet Civil Framework (Law No. 12,965/2014)</strong>, and <strong>Google's policies</strong> when you choose to connect your Google account (OAuth).
            </p>

            <hr className="my-8"/>

            <section id="data-we-collect">
              <h2 className="text-2xl font-bold mb-4">1. Data We Collect</h2>

              <h3 className="text-xl font-semibold mb-2">1.1 Data you provide</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email, password (or social login), company, job title.</li>
                <li>Content you submit to Epic (e.g., ideas, documents, prompts, PRDs/PRPs), comments, attachments, and project metadata.</li>
              </ul>
              <p className="mb-4">
                <strong>Legal bases (LGPD):</strong> performance of a contract and preliminary procedures; legitimate interest to improve the Service, subject to your rights.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.2 Data collected automatically</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Technical logs about access and usage (IP address, timestamps, device identifiers, pages/actions, telemetry, crash/error data).</li>
                <li>Cookies and similar technologies for authentication, security, preferences, and analytics (manageable in your browser).</li>
              </ul>
              <p className="mb-4">
                <strong>Internet Civil Framework:</strong> we retain <strong>application access logs</strong> for <strong>6 months</strong> under secrecy and security controls.
              </p>

              <h3 className="text-xl font-semibold mb-2">1.3 Google integrations (optional)</h3>
              <p className="mb-2">
                If you connect your Google account via OAuth, we collect <strong>only what is necessary</strong> for the features you enable (e.g., <strong>email/ID</strong> for login). We comply with the <strong>Google API Services User Data Policy — Limited Use</strong> (see Section 4).
              </p>
              <p className="mb-2">
                <strong>Default Google scopes used by Epic:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><code>openid</code></li>
                <li><code>email</code></li>
                <li><code>profile</code></li>
              </ul>
              <p className="mb-4">
                Additional scopes will be requested only if you opt in to features that require them, with clear purpose shown in the interface before consent.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="purposes">
              <h2 className="text-2xl font-bold mb-4">2. Purposes of Processing</h2>
              <ul className="list-disc pl-6">
                <li><strong>Provide and operate</strong> Epic; authenticate users; maintain security and reliability; prevent abuse/fraud.</li>
                <li><strong>Support and communications</strong> about the Service (product changes, updates, important notices).</li>
                <li><strong>Product improvement</strong> using aggregated/anonymous metrics and usability testing.</li>
                <li><strong>User-requested integrations</strong> (e.g., Google), strictly for the selected functionality.</li>
                <li><strong>Legal compliance</strong> and the exercise/defense of legal claims.</li>
              </ul>
            </section>

            <hr className="my-8"/>

            <section id="ai-processing">
              <h2 className="text-2xl font-bold mb-4">3. AI Processing and Service Providers (Processors)</h2>
              <p>
                To deliver "AI Product Manager" capabilities, Epic may process your text/documents through cloud providers and/or AI model services under <strong>data processing agreements</strong> and security controls (encryption in transit, access control, audit logs). <strong>We do not use your data to train third-party, general-purpose models outside the scope of the Service.</strong>
              </p>
            </section>

            <hr className="my-8"/>

            <section id="google-oauth">
              <h2 className="text-2xl font-bold mb-4">4. Google OAuth & "Limited Use"</h2>
              <p className="mb-4">When you connect your Google account, we:</p>
              <ol className="list-decimal pl-6">
                <li className="mb-2"><strong>Limit our use</strong> of Google user data <strong>solely</strong> to provide and improve <strong>user-facing features</strong> of Epic.</li>
                <li className="mb-2"><strong>Do not transfer</strong> data to third parties, except (i) as necessary to provide the feature; (ii) with your explicit consent; (iii) to comply with law; or (iv) in a corporate transaction (with notice).</li>
                <li className="mb-2"><strong>Do not use</strong> Google data for advertising (including retargeting or personalized ads).</li>
                <li className="mb-2"><strong>Do not allow human reading</strong> of Google data, except with your explicit consent, for security/bug investigations, or where required by law.</li>
              </ol>
              <p>
                You can revoke Epic's access at any time in your Google Account <strong>Security Settings</strong>.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="sharing">
              <h2 className="text-2xl font-bold mb-4">5. Sharing of Personal Data</h2>
              <p className="mb-4">We may share personal data with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service providers/processors</strong> (hosting, monitoring, analytics, support), strictly to deliver the Service.</li>
                <li><strong>Authorities</strong> when required by law, court order, or valid request.</li>
                <li><strong>Corporate transactions</strong> (merger, acquisition, asset sale), maintaining protections consistent with this Policy and notifying users.</li>
              </ul>
              <p>
                When we act as a <strong>processor</strong> for enterprise customers, we follow the customer's (controller's) documented instructions in accordance with LGPD.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="international-transfers">
              <h2 className="text-2xl font-bold mb-4">6. International Transfers</h2>
              <p>
                Your data may be processed by providers outside Brazil. In such cases, we implement <strong>appropriate safeguards</strong> required by LGPD (Arts. 33 et seq.), including contractual protections ensuring an adequate level of protection.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="information-security">
              <h2 className="text-2xl font-bold mb-4">7. Information Security</h2>
              <p>
                We implement technical and organizational measures proportionate to risk, including encryption in transit, role-based access control, periodic permission reviews, audit logging, and secure development practices. We maintain <strong>application access logs</strong> for at least <strong>6 months</strong> in controlled environments.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="retention">
              <h2 className="text-2xl font-bold mb-4">8. Retention and Deletion</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Active accounts:</strong> we keep data as long as necessary to provide the Service.</li>
                <li><strong>Logs (Internet Civil Framework):</strong> retained for 6 months unless a different legal obligation applies.</li>
              </ul>
              <p>
                After the purpose ends or upon your deletion request, we <strong>securely delete</strong> or <strong>anonymize</strong> data unless we must retain it under a valid legal basis (e.g., fraud prevention, billing, legal obligations).
              </p>
            </section>

            <hr className="my-8"/>

            <section id="your-rights">
              <h2 className="text-2xl font-bold mb-4">9. Your Rights (LGPD, Art. 18)</h2>
              <p className="mb-4">
                You may request: <strong>confirmation and access</strong> to data; <strong>correction</strong> of inaccurate/outdated data; <strong>anonymization, blocking, or deletion</strong> of unnecessary/excess data; <strong>portability</strong>; <strong>information about sharing</strong>; <strong>withdrawal of consent</strong>; and <strong>review of automated decisions</strong> where applicable.
              </p>
              <p>
                To exercise your rights, contact our DPO at <Link href="mailto:deb@donoshq.com" className="text-blue-600 hover:underline">deb@donoshq.com</Link>.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="cookies">
              <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
              <p>
                We use essential cookies (authentication, security) and functional/analytics cookies to improve your experience. You can manage cookies in your browser; some features depend on them.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="legal-bases">
              <h2 className="text-2xl font-bold mb-4">11. Legal Bases (LGPD)</h2>
              <ul className="list-disc pl-6">
                <li><strong>Performance of a contract</strong> (provision of Epic).</li>
                <li><strong>Compliance with legal/regulatory obligations</strong> (e.g., log retention).</li>
                <li><strong>Legitimate interests</strong> (product improvement under safeguards, fraud prevention).</li>
                <li><strong>Consent</strong> (when required, e.g., optional integrations or specific communications).</li>
              </ul>
            </section>

            <hr className="my-8"/>

            <section id="children">
              <h2 className="text-2xl font-bold mb-4">12. Children and Adolescents</h2>
              <p>
                Epic is intended for professional use by adults. We do not knowingly collect data from children under 13. If you believe a minor has provided data, contact the DPO for appropriate removal.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="changes">
              <h2 className="text-2xl font-bold mb-4">13. Changes to This Policy</h2>
              <p>
                We may update this Policy to reflect legal, regulatory, or product changes. We will post the revised version with a new effective date and, for material changes, provide additional notice.
              </p>
            </section>

            <hr className="my-8"/>

            <section id="contact">
              <h2 className="text-2xl font-bold mb-4">14. Contact</h2>
              <p>
                <strong>Deborah Barreira Folloni (DPO)</strong><br/>
                <strong>Email:</strong> <Link href="mailto:deb@donoshq.com" className="text-blue-600 hover:underline">deb@donoshq.com</Link><br/>
                <strong>Postal address:</strong> Av. Eng. Luiz Carlos Berrini, 155–255, Torre Kansas, ZIP 04571-900, São Paulo/SP, Brazil
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}