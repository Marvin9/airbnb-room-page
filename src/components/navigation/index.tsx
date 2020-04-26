import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { Box, Flex } from 'rebass';

import { NavigationProps } from './types';
import { colors, contentMaxWidth } from '../../shared';
import { links } from './constants';
import { Link } from './components/Link';

export const Navigation: React.FC<NavigationProps> = ({ offsetTopsOfContents }) => {
  const [currentActiveLink, setActiveLink] = useState(0);
  const bound = offsetTopsOfContents.length - 1;

  const linksHandler = (): void => {
    if (
      currentActiveLink + 1 <= bound
      && window.scrollY >= offsetTopsOfContents[currentActiveLink + 1]
    ) {
      setActiveLink(currentActiveLink + 1);
    } else if (
      currentActiveLink - 1 >= 0
      && window.scrollY <= offsetTopsOfContents[currentActiveLink - 1]
    ) {
      setActiveLink(currentActiveLink - 1);
    }
  };

  // https://github.com/facebook/react/issues/14066
  useEffect(() => {
    window.addEventListener('scroll', linksHandler);
    return (): void => window.removeEventListener('scroll', linksHandler);
  }, [currentActiveLink]);

  return (
    <Box
      sx={{
        color: colors.blue,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1,
        background: 'white',
        borderBottom: `1px solid ${colors.light}`,
      }}
    >
      <Flex
        sx={{
          maxWidth: contentMaxWidth,
          mx: 'auto',
        }}
      >
        {links.map((link, index) => (
          <Link
            key={shortid.generate()}
            {...(
              index === currentActiveLink
                ? { active: true }
                : {})
            }
            onClick={(): void => {
              window.scrollTo({
                top: offsetTopsOfContents[index],
                behavior: 'smooth',
              });
            }}
          >
            {link.name}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
