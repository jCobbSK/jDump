import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Get smart',
    link: {
      to: '/docs',
      content: 'Make me smarter!',
    },
    icon: faLightbulb,
    description: (
      <>
        Various topics I find interesting from software development, book reports, startups, running ...
      </>
    ),
  },
  {
    title: 'Mind dump',
    link: {
      to: '/blog',
      content: 'Show me that garbage!',
    },
    icon: faTrash,
    description: (
      <>
        My day to day thoughts. Just ideas putting out there about everything and anything.
      </>
    ),
  },
];

function Feature({icon, title, description, link}) {
  const {isDarkTheme} = useThemeContext();
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <FontAwesomeIcon icon={icon} color={isDarkTheme ? 'white': 'black'} size="lg" />
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link.to}>{link.content}</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
  );
}
