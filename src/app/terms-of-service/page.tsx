import { Header } from "@/components/sections"
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#F6F4F1' }}>
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service — Epic</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective date:</strong> September 23, 2025<br/>
              <strong>Controller/Provider:</strong> Catchy Assessoria Empresarial LTDA, CNPJ 56.221.911/0001-01, registered office at Av. Eng. Luiz Carlos Berrini, 155–255, Torre Kansas, ZIP 04571-900, São Paulo/SP, Brazil.<br/>
              <strong>Legal Contact/DPO:</strong> <Link href="mailto:legal@donoshq.com" className="text-blue-600 hover:underline">legal@donoshq.com</Link>
            </p>

            <p className="mb-4">
              Welcome to Epic (the &ldquo;Service&rdquo;). By creating an account, accessing, or using Epic, you agree to these Terms. If you are accepting these Terms on behalf of a company, you represent that you have the authority to bind such entity.
            </p>

            <p className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <strong>Consumer notice:</strong> nothing in these Terms restricts inalienable rights under the Consumer Protection Code when applicable.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What is Epic</h2>
              <p>
                Epic is an &ldquo;AI Product Manager&rdquo; software that helps transform ideas into PRDs/PRPs, journeys, and tasks, including through optional integrations (e.g., Google OAuth). Features may evolve continuously.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Eligibility and Account</h2>
              <ul className="list-disc pl-6">
                <li>You must be 18 years or older and provide accurate information.</li>
                <li>You are responsible for keeping credentials confidential and for activities performed under your account.</li>
                <li>We may refuse, suspend, or terminate accounts for violation of these Terms, security risks, or legal requirements.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Plans, Pricing, and Payment</h2>
              <ul className="list-disc pl-6">
                <li>Use of Epic may be subject to free and/or paid plans (subscriptions). Prices, limits, and features are disclosed in the Service interface.</li>
                <li><strong>Billing cycle:</strong> as presented at checkout.</li>
                <li><strong>Taxes:</strong> prices may not include taxes; when applicable, they will be added.</li>
                <li><strong>Adjustments:</strong> we may update prices; we will notify you with reasonable advance notice and the new pricing will apply in the next cycle.</li>
                <li><strong>Cancellation:</strong> you may cancel at any time; cancellation prevents future renewals.</li>
                <li><strong>Refunds:</strong> except as expressly provided in commercial policy or legal requirement, payments are non-refundable.</li>
              </ul>
              <p className="mt-4">
                If you act as a consumer and have a legal right of withdrawal, we will follow the period and conditions provided by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Tests, Betas, and Early Access</h2>
              <p>
                Alpha/beta features are provided &ldquo;as is&rdquo;, may contain bugs, change or be discontinued without notice, and may have additional specific rules.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. User Content</h2>
              <ul className="list-disc pl-6">
                <li>You retain ownership of the content you submit to Epic (&ldquo;Content&rdquo;).</li>
                <li>You grant Catchy a worldwide, non-exclusive, and limited license to host, process, display, and transmit Content solely to operate and improve the Service and comply with legal obligations.</li>
                <li>You represent that you have necessary rights to the Content and that it does not violate law or third-party rights.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. AI Outputs</h2>
              <ul className="list-disc pl-6">
                <li>Epic may generate &ldquo;AI-assisted&rdquo; texts/structures. You are responsible for reviewing, validating, and using such results.</li>
                <li>We do not guarantee that outputs are error-free, fit for a specific purpose, or do not infringe third-party rights; we provide tools, not legal/technical consulting.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Privacy and Data</h2>
              <ul className="list-disc pl-6">
                <li>Processing of personal data follows Epic&apos;s <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> (incorporated by reference).</li>
                <li>We comply with LGPD and the Internet Civil Framework (including record keeping).</li>
                <li>For Google integrations, we comply with the Google API Services User Data Policy — Limited Use (see Section 10).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Security</h2>
              <p>
                We adopt reasonable technical and administrative measures (encryption in transit, access control, auditing, secure development practices). You must also adopt good practices (strong passwords, 2FA, internal access management).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Acceptable Use</h2>
              <p className="mb-4">It is prohibited to:</p>
              <ol className="list-decimal pl-6">
                <li>violate the law, third-party rights, or these Terms;</li>
                <li>attempt to bypass technical limitations, reverse engineer, perform unauthorized scans or tests;</li>
                <li>introduce malware, spam, abusive scraping, improper data mining, denial of service attacks;</li>
                <li>use Epic for illegal, defamatory, hateful content that incites violence, violates privacy, intellectual property, or trade secrets;</li>
                <li>overload infrastructure, bypass usage limits, or share credentials;</li>
                <li>use Epic outputs in ways that violate integrated provider policies (e.g., Google).</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Integrations and Google OAuth (&ldquo;Limited Use&rdquo;)</h2>
              <p className="mb-4">
                Integrations are optional. By enabling them, you authorize strictly necessary access to the feature.
              </p>
              <p className="mb-4">
                <strong>&ldquo;Limited Use&rdquo; Commitments:</strong> we do not use Google data for advertising; we limit use to features visible in Epic; we do not transfer to third parties except to operate the functionality, comply with law, or with your consent; we do not allow human reading, except with your consent, for security/bug reasons, or legal requirements.
              </p>
              <p>
                You can revoke access in your Google Account Security Settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Epic Intellectual Property</h2>
              <p>
                Epic, its brand, code, design, databases, and documentation belong to Catchy and/or licensors. These Terms do not transfer intellectual property. We grant you a limited, revocable, non-exclusive license to use Epic in accordance with these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Feedback</h2>
              <p>
                If you submit ideas, suggestions, or improvements (&ldquo;Feedback&rdquo;), you grant Catchy an irrevocable, worldwide, royalty-free license to use the Feedback without obligation for credit or payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Support</h2>
              <p>
                We offer reasonable support through channels indicated in the interface (e.g., email). Specific service levels (SLA), when applicable, will be described in a separate plan/contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">14. Suspension and Termination</h2>
              <p className="mb-4">
                We may suspend or terminate access if: (i) there is a violation of these Terms/policies, (ii) security/operability risk, (iii) legal requirement/authority order, or (iv) default. You may terminate your account at any time. Certain terms survive termination (e.g., intellectual property, liability limitations, confidentiality, jurisdiction).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">15. Confidentiality</h2>
              <p>
                Non-public information exchanged between parties must be kept confidential and used only to fulfill these Terms, except when: already public without fault; legitimately received from third parties; required by law/authority (with prior notice when possible).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">16. Warranties and Disclaimers (&ldquo;as is&rdquo;)</h2>
              <p>
                To the maximum extent permitted by law, Epic is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We do not guarantee uninterrupted availability, absence of errors, fitness for a specific purpose, or non-infringement. This does not limit mandatory legal warranties when applicable to consumers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">17. Limitation of Liability</h2>
              <p className="mb-4">To the extent permitted by law:</p>
              <ul className="list-disc pl-6">
                <li>Catchy will not be liable for indirect, special, incidental, punitive damages, loss of profits/revenue, data loss, business interruption, or replacement costs.</li>
                <li>Catchy&apos;s total aggregate liability for any claims will not exceed the amounts actually paid by you to Epic in the 12 (twelve) months prior to the event giving rise to liability.</li>
              </ul>
              <p>
                These limitations do not apply to cases of willful misconduct or where prohibited by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">18. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Catchy and its representatives against third-party claims arising from your use of Epic in violation of these Terms, law, or third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">19. International Transfer</h2>
              <p>
                Epic may use providers outside Brazil. We implement LGPD-compatible safeguards for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">20. Force Majeure</h2>
              <p>
                Neither party will be liable for failures arising from events beyond reasonable control (force majeure), provided reasonable efforts are made to mitigate impacts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">21. Modifications to Terms</h2>
              <p>
                We may update these Terms to reflect legal or product changes. We will post the revised version with a new effective date. Material changes will be communicated with reasonable advance notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">22. Assignment</h2>
              <p>
                You may not assign or transfer these Terms without prior written consent. Catchy may assign in case of corporate reorganization, merger, acquisition, or asset sale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">23. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of Brazil. The courts of São Paulo/SP are elected as the competent forum, waiving any other, however privileged, except for legal rules of consumer jurisdiction when applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">24. Communications</h2>
              <p>
                Formal notices may be sent to <Link href="mailto:legal@donoshq.com" className="text-blue-600 hover:underline">legal@donoshq.com</Link>. Product communications may occur within Epic itself or via email associated with your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">25. Final Provisions</h2>
              <ul className="list-disc pl-6">
                <li>If any provision is deemed invalid, the others will remain in effect.</li>
                <li>Failure to exercise a right does not imply waiver.</li>
                <li>These Terms, together with the <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>, constitute the entire agreement between you and Catchy regarding the use of Epic.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}