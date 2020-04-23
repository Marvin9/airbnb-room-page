import React, { useState, useEffect } from 'react';
import { Text } from 'rebass';

import { colors } from './index';

interface RestProp {
  [rest: string]: any;
}

export const Divider: React.FC<RestProp> = ({ margin, ...all }) => (
  <hr
    style={{
      background: colors.greyish,
      opacity: 0.2,
      margin: margin ?? '30px 0',
    }}
    {...all}
  />
);

interface ExpandableBoxProps extends RestProp {
  maxChar?: number;
  children: string;
}

export const ExpandableBox: React.FC<ExpandableBoxProps> = ({
  children,
  maxChar = 150,
  ...rest
}) => {
  const [showAll, changeShowAll] = useState(true);

  useEffect(() => {
    if (children.length > maxChar) {
      changeShowAll(false);
    }
  }, []);

  return (
    <Text
      sx={{
        wordWrap: 'break-word',
      }}
      {...rest}
    >
      {showAll && children}
      {!showAll && `${children.slice(0, maxChar)}...`}
      {!showAll && (
        <LinkText onClick={(): void => changeShowAll(true)} m={0}>
          Read More
        </LinkText>
      )}
    </Text>
  );
};

export const Heading: React.FC<RestProp> = ({ children, ...rest }) => (
  <Text fontSize={4} fontWeight="bold" my={3} color={colors.modernBlack} {...rest}>
    {children}
  </Text>
);

export const LinkText: React.FC<RestProp> = ({ children, ...rest }) => (
  <Text
    color={colors.blue}
    sx={{ textDecoration: 'underline', cursor: 'pointer' }}
    my={2}
    fontWeight="bold"
    {...rest}
  >
    {children}
  </Text>
);

export const MediumHeading: React.FC<RestProp> = ({ children, ...rest }) => (
  <Text fontSize={2} fontWeight="bold" my={3} color={colors.modernBlack} {...rest}>
    {children}
  </Text>
);

interface ReadMoreProps {
  showLabel?: string;
  hideLabel?: string;
}

export const ReadMore: React.FC<ReadMoreProps> = ({
  children,
  showLabel = 'Show more',
  hideLabel = 'Hide',
}) => {
  const [showReadMore, changeReadMore] = useState(false);

  const toggleReadMore = (): void => changeReadMore(!showReadMore);

  return (
    <>
      {showReadMore && children}

      <LinkText
        onClick={(): void => toggleReadMore()}
      >
        {showReadMore ? hideLabel : showLabel}
      </LinkText>
    </>
  );
};

export const TextWithBreakLines: React.FC<{ children: string }> = ({ children }) => (
  <>
    {children.split('\n').map((chunk) => (
      <>
        {chunk}
        <br />
      </>
    ))}
  </>
);
