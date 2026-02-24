import React, { useCallback, useState } from 'react';
import { Typography } from './Typography';
import { projectData } from '../projectData';

const COPY_FEEDBACK_DURATION_MS = 1500;

export function Contact(): React.ReactElement {
  const { heading, bodyTemplate, buttonText: initialButtonText, buttonTextCopied, email } =
    projectData.copy.contact;
  const [buttonText, setButtonText] = useState(initialButtonText);

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(email);
    setButtonText(buttonTextCopied);
    setTimeout(() => setButtonText(initialButtonText), COPY_FEEDBACK_DURATION_MS);
  }, [email, buttonTextCopied, initialButtonText]);

  return (
    <section aria-labelledby="contact-heading" className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="w-full md:max-w-xl text-center">
            <Typography variant="heading" gradient level={2} id="contact-heading">
              {heading}
            </Typography>
            <Typography variant="body">
              {bodyTemplate.split('{{email}}').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <span className="bg-gradient-text bg-clip-text text-transparent font-normal">
                      {email}
                    </span>
                  )}
                  {part.split('\n').map((line, j) => (
                    <React.Fragment key={j}>
                      {j > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </Typography>
            <a
              id="email-btn"
              href={`mailto:${email}`}
              onClick={handleClick}
              className="group relative inline-block mt-6 px-10 py-4 rounded border-2 border-white bg-black transition-all duration-150 hover:border-transparent hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(120deg,#67e8f9_0%,#22d3ee_15%,#0ea5e9_30%,#3b82f6_50%,#6366f1_70%,#8b5cf6_85%,#a78bfa_100%)_border-box]"
              aria-label={`Email me at ${email}. Click to copy address.`}
            >
              <span className="text-white">{buttonText}</span>
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-gradient-text bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded"
              >
                {buttonText}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
