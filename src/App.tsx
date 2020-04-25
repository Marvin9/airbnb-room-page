import React, { useState, useEffect } from 'react';
import { Flex } from 'rebass';

import { contentMaxWidth } from './shared';
import {
  ImageGrid,
  Content,
  Navigation,
  ReserveCard,
} from './components';

import { links } from './components/navigation/constants';

export const App: React.FC = () => {
  const [scrollTops, updateScrollTops] = useState<number[]>([]);
  const [currentScroll, updateCurrentScroll] = useState(0);

  useEffect(() => {
    let navigationEssentials: number[] = [];
    links.forEach((link) => {
      if (document) {
        const ref = document.querySelector(`#${link.reference}`);

        if (ref && ref instanceof HTMLElement) {
          navigationEssentials = [
            ...navigationEssentials,
            ref.offsetTop,
          ];
        }
      }
    });
    updateScrollTops(navigationEssentials);
  }, []);

  const setScroll = (): void => updateCurrentScroll(window.scrollY);

  // https://github.com/facebook/react/issues/14066
  useEffect(() => {
    window.addEventListener('scroll', setScroll);
    return (): void => window.removeEventListener('scroll', setScroll);
  }, [currentScroll]);

  return (
    <>
      {!!scrollTops.length
        && currentScroll >= scrollTops[0]
        && <Navigation offsetTopsOfContents={scrollTops} />}

      <ImageGrid />

      <Flex
        sx={{
          maxWidth: contentMaxWidth,
          mx: 'auto',
          py: 30,
        }}
        my="auto"
        alignItems="flex-start"
      >
        <Content />
        <ReserveCard
          price={{
            currentPrice: 1000,
          }}
          maxGuests={4}
          review={4.7}
          totalReviews={100}
        />
      </Flex>
    </>
  );
};
