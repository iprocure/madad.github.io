'use client';

import { EXTERNAL_LINKS } from '@/utils/constants';
import { openExternalLink } from '@/utils/helpers';
import { useAnalytics } from '@/hooks/useAnalytics';

interface JoinWaitlistButtonProps {
  className?: string;
  children?: React.ReactNode;
  location?: string;
}

const JoinWaitlistButton = ({
  className = 'input_email_submit_button',
  children = 'Join Waitlist',
  location = 'Unknown'
}: JoinWaitlistButtonProps) => {
  const { trackExternalLinkClick } = useAnalytics();

  const handleClick = () => {
    trackExternalLinkClick(EXTERNAL_LINKS.WAITLIST_FORM, `Join Waitlist - ${location}`);
    openExternalLink(EXTERNAL_LINKS.WAITLIST_FORM);
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};

export default JoinWaitlistButton;
