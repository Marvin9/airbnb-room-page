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

  return (
    <>
      {!!scrollTops.length
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
          calculateTotalPrice={(guests): number => {
            const adults = guests.adults ?? 1;
            const children = guests.children ?? 0;

            return Math.floor((adults + children) * 1000);
          }}
        />
      </Flex>
    </>
  );
};
