import React from 'react';

const TermsAndPolicy = () => {
    return (
        <div className="bg-[#F9C5D1] text-[#2D325B] p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-[#FAD9DF] p-6 rounded-lg shadow-md border border-[#F9C5D1]">
                <h1 className="text-4xl font-bold mb-6 text-center">Terms and Privacy Policy</h1>
                <p className="mb-6 text-lg leading-relaxed">
                    Welcome to our Book Search and Recommendation Website. By using our services, you agree to the following terms and conditions, as well as our privacy practices.
                </p>
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[#F9C5D1] pb-2">Terms of Use</h2>
                <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
                    <li>You must be 13 years or older to use our platform.</li>
                    <li>You agree not to misuse the service or access it using unauthorized means.</li>
                    <li>
                        You understand that recommendations are generated using the Gemini API and are based on the data you provide.
                    </li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[#F9C5D1] pb-2">Privacy Policy</h2>
                <p className="mb-4 text-lg leading-relaxed">
                    We are committed to protecting your privacy. Here’s how we handle your information:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
                    <li>
                        <strong>Google Login:</strong> We use Google OAuth for login. Your email address is retrieved solely for the purpose of providing personalized book summaries and recommendations.
                    </li>
                    <li>
                        <strong>Data Usage:</strong> Your email address is securely transmitted to the Gemini API to generate book recommendations. We do not share your email with third parties outside of this scope.
                    </li>
                    <li>
                        <strong>Data Retention:</strong> We do not store your email address or personal information permanently. Data is temporarily used during your session.
                    </li>
                    <li>
                        <strong>Cookies:</strong> Our website may use cookies to improve your browsing experience.
                    </li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[#F9C5D1] pb-2">Your Responsibilities</h2>
                <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
                    <li>Ensure your login credentials remain confidential.</li>
                    <li>Use the platform responsibly and avoid any malicious activity.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[#F9C5D1] pb-2">Contact Us</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    If you have any questions or concerns about our Terms or Privacy Policy, feel free to contact us at <a href="mailto:support@bookrec.com" className="text-[#2D325B] font-semibold underline">d.prakash1506@gmail.com</a>.
                </p>
                <p className="text-sm italic text-center text-[#2D325B]">
                    Note: This document may be updated periodically. Please review it regularly.
                </p>
            </div>
        </div>
    );
};

export default TermsAndPolicy;
