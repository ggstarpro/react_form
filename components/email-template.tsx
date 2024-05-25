import * as React from 'react';
import { string } from 'zod';

interface EmailTemplateProps {
  username: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({username, email, content}) => {
  return (
      <div>
      <h1>こんにちわ {username}です。</h1>
      <p>{email}から届きました</p>
      <p>{content}</p>
    </div>
  );
};