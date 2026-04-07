import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    Image: '/img/technical_difficulties.png',
  },
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img src={useBaseUrl(Image)} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        {title && <Heading as="h3">{title}</Heading>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
