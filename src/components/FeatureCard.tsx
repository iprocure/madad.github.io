import Image from 'next/image';
import { FeatureCard as FeatureCardType } from '@/types';

interface FeatureCardProps {
  feature: FeatureCardType;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const renderIcon = () => {
    if (feature.icon === 'QAR') {
      return (
        <div className="QAR">
          QAR
        </div>
      );
    }

    if (feature.id === 'multiple-financiers') {
      return (
        <div className="QAR">
          QAR
        </div>
      );
    }

    if (feature.id === 'msme-ecosystem') {
      return (
        <div className="qatari_msme_group flex gap-2">
          <Image 
            src="/qatari_msme1.png" 
            alt="MSME ecosystem icon 1" 
            width={40}
            height={40}
            className="msme_group_image1"
          />
          <Image 
            src="/qatari_msme2.png" 
            alt="MSME ecosystem icon 2" 
            width={40}
            height={40}
            className="msme_group_image2"
          />
        </div>
      );
    }

    if (feature.id === 'instant-cash') {
      return (
        <div className="flex gap-2">
          <Image 
            src="/cashIcon.png" 
            alt="Cash icon" 
            width={40}
            height={40}
          />
          <Image 
            src="/handIcon.png" 
            alt="Hand icon" 
            width={40}
            height={40}
          />
        </div>
      );
    }

    return (
      <Image 
        src={feature.icon} 
        alt={feature.imageAlt} 
        width={60}
        height={60}
        className="build_ur_business"
      />
    );
  };

  return (
    <div className="feature-card">
      <div className="icon-wrapper">
        {renderIcon()}
      </div>
      <h2 className="feature-title">{feature.title}</h2>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
