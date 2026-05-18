import React, { useEffect } from "react";

const TermsConditionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="oswald text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 text-white">
          Terms & <span className="text-[#FF0000]">Conditions</span>
        </h1>
        
        <div className="prose prose-invert max-w-none text-gray-400 space-y-6 text-lg">
          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4">Terms and Conditions of Use</h2>
            <p>
              Welcome to the website of DRAMANTRAM ACADEMY (hereinafter referred to as the "Site" or "DRAMANTRAM ACADEMY" interchangeably). These terms and conditions of use ("Terms") constitute a legal agreement between you and DRAMANTRAM ACADEMY. Use of this Site constitutes your unconditional acceptance of these Terms herein and by all terms, policies, and guidelines incorporated by reference. These Terms apply to your use of this Site, and do not alter in any way the terms or conditions of any other agreement you may have with DRAMANTRAM ACADEMY, its subsidiaries, or affiliates. If you are using the Site on behalf of any entity, you further represent and warrant that you are authorized to accept these Terms on such entity's behalf, and that such entity agrees to indemnify DRAMANTRAM ACADEMY for violations of these Terms. If you do not agree with these terms, please do not use this Site.
            </p>
            <p className="mt-4">
              Any individual and organisation wanting to make use of the Site to post internships/jobs (hereinafter referred to as the "Jobs") for self or for an organisation he/she represents is referred to as "Employer" or "Employers" as context may demand.
            </p>
            <p className="mt-4">
              Any individual wanting to make use of the Site to apply to Jobs listed on DRAMANTRAM ACADEMY is referred to as "Applicant" or "Applicants" as context may demand.
            </p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Registration Data and Account Security</h2>
            <p>In consideration of your use of the Site, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide accurate, current and complete information about you as may be prompted by any registration forms on the Site ("Registration Data");</li>
              <li>Maintain and promptly update the Registration Data, and any other information you provide to DRAMANTRAM ACADEMY, to keep it accurate, current and complete;</li>
              <li>Maintain the security of your password and identification;</li>
              <li>Notify DRAMANTRAM ACADEMY immediately of any unauthorized use of your account or any other breach of security;</li>
              <li>Accept all responsibility for any and all activities that occur under your account; and</li>
              <li>Accept all risks of unauthorized access to the Registration Data and any other information you provide to DRAMANTRAM ACADEMY. Please refer to our Privacy Policy for more details on how we collect, store, use, and retain your data on the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Most Important Terms & Conditions for Employers</h2>
            <p>
              These Terms, specifically for Employers, are in addition to the other generic Terms & Conditions listed on the page which are common to all the users of the site and which you are required to go through. Any violation of these Terms may result in, but not limited to, an Employer's Job being declined for publication on DRAMANTRAM ACADEMY and/or his/her account being permanently blocked and/or appropriate legal action being initiated against him/her by DRAMANTRAM ACADEMY.
            </p>
            
            <h3 className="oswald text-xl md:text-2xl font-bold uppercase text-white mb-3 mt-8">Job Posting T&Cs</h3>
            <p>It is your responsibility to ensure that you are authorized to post Jobs on your organization's behalf. Any dispute or legal claim arising out of unauthorized posting would be solely your liability and you indemnify DRAMANTRAM ACADEMY of any and all possible consequences of such actions.</p>
            <p className="mt-4">If you upload your organization's logo while posting your Job or creating/updating your company profile, you are authorizing DRAMANTRAM ACADEMY to display it on our website along with the Job post or in the list of our clients. It is your responsibility to ensure that you are duly authorized to share your organization logo with third parties and allow them to use it.</p>
            <p className="mt-4">DRAMANTRAM ACADEMY reserves the right to publish the Job post of Employers on its social media handles and job board partners (such as LinkedIn, Indeed, etc.) and in relevant publications in order to increase the visibility of the Job post.</p>
            <p className="mt-4">You must provide accurate and complete details about the organization and the Job. Any act of misinformation or hiding material information would result in your account being permanently blocked or any other suitable action as deemed fit by DRAMANTRAM ACADEMY.</p>
            <p className="mt-4">You may be asked for documents in the name of your company for our first-time user authentication process. This information will only be used for authentication purposes and will not be used anywhere else in any form.</p>
            <p className="mt-4">You may also complete the one-time authentication process by signing-in to your company's official multimedia channels. This will be governed by the respective platform's Terms of Service.</p>
            <p className="mt-4">The minimum stipend criteria for an in-office internship is Rs. 2000/Month and for a work from home internship is Rs. 1000/Month. The minimum CTC criteria for a full-time job post is 2 LPA.</p>
            
            <h4 className="text-lg font-bold text-white mb-2 mt-6">DRAMANTRAM ACADEMY does NOT allow:</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Unpaid internships, except for registered NGOs/NPOs, government agencies, and verified niche profiles (such as Law, Experimental Physics, Library Science, and the likes).</li>
              <li>Training programs and any such program where Applicants are expected to pay a security deposit or an admission fee. To charge money in any form (including test fees, security deposits, documentation fees, etc.) from the Applicants for offering a Job is strictly prohibited.</li>
              <li>Modeling Jobs/Internships.</li>
              <li>Network Level Marketing (NLM) jobs/internships where applicants/individuals have to use their personal connections and personal social media accounts to promote a business.</li>
              <li>Any Job where there is a possibility of an Applicant consuming alcohol or smoking or inducing others to do so, as the majority of our platform users are minors.</li>
              <li>Individuals or organizations promoting explicit religious content, a particular religious personality, or a specific sect are not allowed to post Jobs on DRAMANTRAM ACADEMY.</li>
              <li>Businesses promoting or dealing in gambling, adult content, and other prohibited, illegal, or age-inappropriate activities.</li>
              <li>Third-party Job posting. You can post Jobs only for the organization that you directly work for. Recruiting agencies or any third-party agencies are authorized to post Jobs on their clients' behalf only after sharing the client's confirmation via explicit email or authorization letters.</li>
              <li>Any Job where there is a possibility of an Applicant promoting betting or activities not suitable for people under 18 years of age.</li>
              <li>Any unauthorized freelancing opportunities that fail to meet platform safety standards.</li>
              <li>Employers to offer different profiles to applicants than the advertised one.</li>
              <li>Organizations to ask applicants to open personal trading accounts or to assign any pre-selection assessment which involves opening financial trading/securities accounts.</li>
              <li>Organizations to entrust applicants with the task of opening bank accounts on behalf of the Organization as part of the shortlisting process.</li>
              <li>Employers to ask applicants to sell or promote their products/services as part of the shortlisting process.</li>
              <li>Employers to ask applicants for highly sensitive government-issued identity documents at the initial shortlisting stage.</li>
            </ul>

            <h3 className="oswald text-xl md:text-2xl font-bold uppercase text-white mb-3 mt-8">Hiring T&Cs</h3>
            <p>It is your responsibility to ensure that there is no material difference between the Job details that are advertised on DRAMANTRAM ACADEMY and the details that are communicated to Applicants later in the selection process (pre-interview, in the offer letter, etc.). Any negative material difference (such as an offered stipend being lower than what was advertised) will result in suitable action being taken by DRAMANTRAM ACADEMY against you.</p>
            <p className="mt-4">All your communications with Applicants (through DRAMANTRAM ACADEMY Chat or otherwise) should be professional and must not contain any obscene or offensive content.</p>
            <p className="mt-4">Once you hire any Applicant(s) for your Job, you must provide them with an offer letter clearly detailing all the important details of the Job (such as roles & responsibilities, remuneration, and payment mechanism) along with the complete address and contact details of your organisation.</p>
            <p className="mt-4">You must pay the promised remuneration to the selected Applicants in a timely manner as per agreed terms and conditions in the offer letter. Non-payment or delayed payment of the remuneration is strictly prohibited and will invite suitable legal or administrative action against you.</p>
            <p className="mt-4">You must respond within 72 working hours to any Applicant complaints regarding your Job that we may bring to your notice. Failure to do so may result in a temporary or permanent suspension of your DRAMANTRAM ACADEMY account depending on the nature of the complaint.</p>
            <p className="mt-4">If you come across any suspicious activity, content, or behaviour on DRAMANTRAM ACADEMY by an Applicant or another user, you must report it to DRAMANTRAM ACADEMY immediately so that necessary actions can be taken.</p>
            <p className="mt-4">While we put our best efforts into reaching out to the best talent, posting your Job on DRAMANTRAM ACADEMY does not guarantee an immediate hire.</p>
            <p className="mt-4">DRAMANTRAM ACADEMY recommends employers to terminate the internship/job within 15 days if the candidate's performance is demonstrably unsatisfactory.</p>

            <h3 className="oswald text-xl md:text-2xl font-bold uppercase text-white mb-3 mt-8">Applicant Data Usage T&Cs</h3>
            <p>You can use the Applicants' data that you receive for your Job solely for the purpose of hiring. Any attempt to send unrelated communication (promotional content, for example) to the Applicants or any other unauthorized usage of the data is strictly prohibited.</p>
            <p className="mt-4">You are strictly prohibited from transferring, selling, or sharing Applicants' data, for free or for a fee, to any other entity. Any such attempt will result in your account on DRAMANTRAM ACADEMY being permanently blocked and may make you liable for legal action.</p>

            <h3 className="oswald text-xl md:text-2xl font-bold uppercase text-white mb-3 mt-8">Payment & Refund T&Cs</h3>
            <p>Payments for the services offered by DRAMANTRAM ACADEMY shall be on a 100% advance basis.</p>
            <p className="mt-4">Refunds, if any, will be processed strictly as per our Refund Policy.</p>
            <p className="mt-4">DRAMANTRAM ACADEMY offers no guarantees whatsoever for the precise processing timeliness of the refunds reaching the Employers' cards or bank accounts once discharged from our system.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Most Important Terms & Conditions for Applicants</h2>
            <p>These Terms, specifically for Applicants, are in addition to the other generic Terms & Conditions listed on the page which are common to all the users of the site. Any violation of these T&Cs may result in, but is not limited to, an applicant's Job application being declined, their account being permanently blocked, and/or suitable legal action being initiated against them by DRAMANTRAM ACADEMY.</p>
            <ul className="list-disc pl-6 space-y-4 mt-4">
              <li>If you have applied for a Job on DRAMANTRAM ACADEMY and receive a communication regarding your application, you must respond to it within 72 hours.</li>
              <li>Once you accept a Job offer, you must make every possible effort to join and start the Job on time. Failing to show up, declining an accepted Job offer at the last moment, or going completely incommunicado creates an unprofessional impression and reduces the credibility of the applicant community. Any such behaviour will result in your account being blocked on DRAMANTRAM ACADEMY, and we reserve the right to report it to your educational institution's administration where applicable.</li>
              <li>You must provide accurate and complete information at the time of Job application or when creating an account on DRAMANTRAM ACADEMY. Any misrepresentation of information, hiding of material information, or impersonation will result in your account being blocked and being reported to your educational institution's administration.</li>
              <li>You must pay close attention to a Job's complete details (profile, location, remuneration, skills required, etc.) before applying. Persistent irrelevant applications will result in your account being penalized or blocked.</li>
              <li>You are strictly prohibited from transferring, selling, or sharing Employers' data (contact details, etc.), for free or for a fee, with any other entity. Any such attempt will result in your account on DRAMANTRAM ACADEMY being permanently blocked.</li>
              <li>The DRAMANTRAM ACADEMY community expects high standards of professionalism and decorum from its users. All your communications with other users of DRAMANTRAM ACADEMY (through platform chat or otherwise) must remain strictly professional and free of offensive content.</li>
              <li>You agree to have gone through the ‘Safety Tips for Applicants' section of these Terms and have understood the same.</li>
              <li>While it is our endeavor to provide you with accurate and reliable Job information, you must conduct your own due diligence and research about an employer or organisation before starting a Job and take full responsibility for the same.</li>
              <li>If you come across any suspicious activity, content, or behaviour on DRAMANTRAM ACADEMY by an Employer or another user, you must report it to DRAMANTRAM ACADEMY immediately so that necessary actions can be taken.</li>
              <li>Upon registration, your registered email ID and phone number will be subscribed to receive administrative, security, and update notifications via email, SMS, and messaging applications. You may opt out of promotional streams at any time.</li>
              <li>DRAMANTRAM ACADEMY reserves the right to remove your profile photo if it doesn't feature your clear headshot likeness. If your photo is removed, you can upload a fresh, professional image of yourself.</li>
              <li>By uploading a profile picture, you authorize DRAMANTRAM ACADEMY to share it with active employers and relevant administrators within the platform ecosystem.</li>
            </ul>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Safety Tips for Applicants</h2>
            <p>DRAMANTRAM ACADEMY does NOT allow Employers to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Offer unpaid Jobs, unless explicitly permitted under the specific regulatory exceptions mentioned in these Terms.</li>
              <li>Post training programs or any program where Applicants are expected to pay a security deposit, documentation fee, test fee, or admission fee. Charging money from applicants in any form for offering a Job is strictly prohibited.</li>
              <li>Offer modeling Jobs from unverified sources.</li>
              <li>Offer Network Level Marketing (NLM) jobs/internships where applicants have to use personal networks and personal social media accounts to promote a business.</li>
              <li>Offer any Job containing age-inappropriate environments involving alcohol, smoking, or gambling.</li>
              <li>Post Jobs representing organizations that promote explicit religious radicalism, discrimination, or illegal activities.</li>
              <li>Engage in third-party Job posting without explicit platform verification and authorization.</li>
            </ul>

            <p className="mt-6 mb-2 text-white font-bold">Further, it is mandatory for Employers to ensure that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Job details communicated to Applicants at any stage match what was advertised on the platform without negative material differences.</li>
              <li>Assignments given to Applicants to assess their suitability are fair, concise, and relevant to the profile. Getting free project work, uncompensated operational labor, or forced social media engagement disguised as an assessment is strictly prohibited.</li>
              <li>All workspace communications remain strictly professional and courteous.</li>
            </ul>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Legal Disclaimers & Limitation of Liability</h2>
            <p>This Site and its content are provided "as is". DRAMANTRAM ACADEMY and its directors, employees, content providers, agents, and affiliates exclude, to the fullest extent permitted by applicable law, any warranty, express or implied, including, without limitation, any implied warranties of merchantability, satisfactory quality, or fitness for a particular purpose.</p>
            <p className="mt-4">DRAMANTRAM ACADEMY will not be liable for any damages of any kind arising from the use of this site. The technical functions embodied on or in the materials of this site are not warranted to be completely uninterrupted or error-free. You assume the entire cost of all necessary servicing, repair, or correction due to your use of this site or its content. DRAMANTRAM ACADEMY makes no warranty that the site or its content is entirely free from server-side security vulnerabilities, viruses, or anything else containing destructive properties, though reasonable security standards are maintained.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Rights to Website and Contents Thereof</h2>
            <p>This Site is owned and operated by DRAMANTRAM ACADEMY. All the content featured or displayed on this Site, including, but not limited to, text, graphics, data, images (photographic and moving), illustrations, software, and the selection and arrangement thereof ("Content"), is owned by DRAMANTRAM ACADEMY. All elements of this Site are protected by copyright, moral rights, trademark, and other laws related to the protection of intellectual property rights. Except as explicitly permitted under a written license or agreement with DRAMANTRAM ACADEMY, no portion or element of this Site or its content may be copied or retransmitted via any means.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Using the Website</h2>
            <p>You may not use this Site or the content for any purpose which is not related to your explicit educational, training, or professional hiring business with DRAMANTRAM ACADEMY. Any unauthorized use of the Content, this Site, or any of its functionality is grounds for the immediate revocation of any usernames, passcodes, or permissions that may have been granted.</p>
            <p className="mt-4">You are specifically prohibited from: (i) downloading, copying, or retransmitting any or all of the Site or the Content without a written license or agreement; (ii) using any automated data mining, robots, or similar data gathering or extraction methods; (iii) manipulating or otherwise displaying the site or the content by using framing or similar navigational technology; and (iv) using the Site or Content other than for its intended purpose. You represent and warrant that you will comply with all applicable global and local regulations relating to the internet, data privacy, e-mail transmission, and technical data exports.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Trademarks</h2>
            <p>The DRAMANTRAM ACADEMY name, logo, custom graphics, page headers, button icons, scripts, and any other product or service slogans contained on the Site are trademarks of DRAMANTRAM ACADEMY and its licensors, and may not be copied, imitated, or used, in whole or in part, without prior written permission. All other trademarks, product names, and company names or logos mentioned on the Site remain the exclusive property of their respective owners.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Indemnity</h2>
            <p>You agree to defend, indemnify, and hold harmless DRAMANTRAM ACADEMY, its subsidiaries, affiliates, licensors, employees, agents, and independent contractors against any claims, damages, costs, liabilities, and expenses (including, but not limited to, reasonable attorneys' fees) arising out of or related to any User Content that you post, store, or otherwise transmit on or through the Site, your conduct, your use or inability to use the Site, your breach or alleged breach of these Site Terms, or your violation of any rights of another party.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Termination</h2>
            <p>Notwithstanding any of these Site Terms, DRAMANTRAM ACADEMY reserves the right, without notice and in its sole discretion, to terminate your account and/or to block your future use of the Site.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Changes to Site Terms</h2>
            <p>DRAMANTRAM ACADEMY reserves the right to change any of the terms and conditions contained in these Terms or any policy or guideline of the Site, at any time and in its sole discretion. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site following the posting of changes will constitute your explicit acceptance of such changes.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Chargeback Policy</h2>
            <p>You hereby expressly agree that once you or any authorized person have initiated a transaction or accessed digital courses, downloads, or premium services on the site by explicitly agreeing to the terms and conditions, and your account or card gets debited, no chargeback claim or dispute filed with your credit card provider, banking institution, or payment gateway service provider shall override this agreement.</p>
            <p className="mt-4">You accept full responsibility towards the ownership, possession, and secure use of your credit card, debit card, or payment credentials. You waive any rights under banking networks to raise a chargeback dispute claiming non-delivery or unauthorized transactions if the system logs show proper credential entry and digital content delivery/access. This policy forms a material condition of this service agreement.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Severance & Waiver</h2>
            <p>No action of DRAMANTRAM ACADEMY, other than an express written waiver or amendment, may be construed as a waiver or amendment of any of these Terms. If any clause in these Terms is found to be legally unenforceable, wherever possible, it will not affect any other clause and each will remain in full force and effect. These Terms set out the entire agreement between DRAMANTRAM ACADEMY and you relating to your use of this Site.</p>
          </section>

          <section>
            <h2 className="oswald text-2xl md:text-3xl font-black uppercase text-white mb-4 mt-12">Jurisdiction</h2>
            <p>All license agreements, platform operations, and issues arising out of any activity regarding the use of this website will be governed by applicable federal and state data regulations, subject to the exclusive jurisdiction of the competent courts of the region where the company headquarters are established.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
