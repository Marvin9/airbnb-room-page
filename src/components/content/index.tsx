import React from 'react';
import { Box } from 'rebass';
import {
  FaHome,
  FaBell,
  FaLandmark,
  FaDollarSign,
  FaBed,
  FaSmoking,
} from 'react-icons/fa';

import { uniqueIds } from './constants';

import { Header } from './components/header';
import { Features } from './components/features';
import { AdditionalDetails } from './components/additionalDetails';
import { Amenities } from './components/amenities';
import { SleepingArrangements } from './components/sleepingArrangements';
import { Reviews } from './components/reviews';
import { HostDetails } from './components/hostDetails';
import { Location } from './components/location';
import { KeepInMind } from './components/keepInMind';

export const Content: React.FC = () => (
  <Box width={[1, 2 / 3]} mr={[0, 4]}>
    <Header
      id={uniqueIds.Header}
      title="Basic bedroom near YYC $16-18/night(+ clean/admin)"
      username="Len"
      userProfilePic="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg"
      location="Northeast Calgary, Calgary, Alberta"
      roomDetails={
        [
          '4 guests',
          '1 bedroom',
          '1 bed',
          '1 bathroom',
        ]
      }
    />

    <Features
      id={uniqueIds.Features}
      items={
        [
          {
            title: 'Entire home',
            description: 'You’ll have the condominium to yourself.',
            Icon: FaHome,
          },
          {
            title: 'Self check-in',
            description: 'Check yourself in with the smartlock.',
            Icon: FaDollarSign,
          },
          {
            title: 'Sparkling clean',
            description: '7 recent guests said this place was sparkling clean.',
            Icon: FaBell,
          },
          {
            title: 'Free cancellation for 48 hours',
            description: 'After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.',
            Icon: FaLandmark,
          },
        ]
      }
    />

    <AdditionalDetails
      id={uniqueIds.AdditionalDetails}
      description="This new modern and chic apartment is situated in the most travel friendly location, only steps away from CN Tower, Scotiabank Arena, Harbour front, Union Station, Financial District, and lots of bars and restaurants. There is a fast unlimited internet access, cable TV, indoor gym, pool, hot tub, sauna room, and outdoor lounge and pool. Tesla Wall Chargers are located in the underground parking area. High floor, quiet and lake view. Our outdoor apartment balcony will not disappoint."
      readMore={
        [
          {
            title: 'The Space',
            description: `The suite is located at the very convenient downtown core within the Financial District. This 1 bedroom suite is 500 square ft in size in addition to a large balcony space. LCBO liquor store, Longos groceries store, all Canadian major banks, sports bar (Real Sports, Hoops, etc), hotel lounge, and restaurants are downstairs within a minute's walk. We are located right next to Scotiabank Arena, Roger Centre and CN Tower (easy access to games and shows). We are connected to the underground PATH system, which allows for easy and warm commute.

            Included in this suite, open concept kitchen with brand new modern appliances
            - Large flat screen TV
            - Free unlimited WiFi
            - Free cable
            - Bedroom with a comfortable queen size bed
            - Large closet in the bedroom
            - View from balcony can see Lake Ontario & City View
            - Large comfortable couch in the living room
            - Bathroom fully equipped
            - In suite washer and dryer`,
          },
        ]
      }
    />

    <Amenities
      id={uniqueIds.Amenities}
      amenities={
        [
          {
            title: 'Lift',
            Icon: FaLandmark,
          },
          {
            title: 'Lift',
            Icon: FaLandmark,
          },
          {
            title: 'Lift',
            Icon: FaLandmark,
          },
          {
            title: 'Lift',
            Icon: FaLandmark,
          },
        ]
      }
    />

    <SleepingArrangements
      id={uniqueIds.SleepingArrangements}
      title="Bedroom 1"
      description="1 queen bed"
      Icon={FaBed}
    />

    <Reviews
      id={uniqueIds.Reviews}
      stars={4.92}
      numberOfReviews={92}
      propertyReviews={{
        location: 4.5,
        accuracy: 1,
        cleanliness: 2,
        communication: 3,
        checkIn: 3.5,
        value: 5,
      }}
      userReviews={
        [
          {
            username: 'Mary',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary2',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary2',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary2',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary2',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary2',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary2',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary2',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary3',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary3',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary3',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary3',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary3',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary3',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary3',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
          {
            username: 'Mary4',
            profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg',
            date: 'March 2020',
            review: 'The space is very open and beautifully laid out. Everything was amazingly clean. Patsy was quick to respond to any questions I had. Great spot for a small family or two couples...there are two bedrooms and two bathrooms. I would definitely stay there again!',
          },
        ]
      }
    />

    <HostDetails
      id={uniqueIds.HostDetails}
      hostName="Len"
      hostDetails={['Calgary, Canada', 'Joined in November 2009']}
      hostReviews={3}
      verified
      profilePic="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e6/e6b94ee5101ad7de8e483460f98d277fbb092b3f_full.jpg"
      details=" am a home owner in Calgary Alberta and i also rent rooms. I use kijiji to get long term renters on an ongoing basis. Being the nearest rental to YYC airport i have been renting mostly to Pilots &Flight crew (Website hidden by Airbnb) include this info to verify that i would be a trouble-free renter because i will behave the way i would wish/prefer my renters would. The most important concern is that the new person to whom i am letting into my home is safe for me and my other renters. Other very important character traits are of honesty, responsibility and respect and to a lesser degree but important hygiene and cleaning up after oneself. And so you will not need to worry about safety or your property. Also as i am new to airbnb and look forward to getting good feedback and using the service on a regular basis. My personality is easy going happy and helpful."
      interactionWithGuests={{
        title: 'Most days and hours i am available.',
        languages: ['English'],
        responseRate: '100%',
        responseTime: 'within an hour',
      }}
    />

    <Location
      id={uniqueIds.Location}
      locationName="Northeast Calgary, Calgary, Alberta"
      locationDetail={`SAFE QUIET single family Neighbourhood.
      10 pm to 9am is Calgary's enforceable quiet time.`}
      readMore={`Bus route 300 map & info is at the Calgary Transit site The stop near the house is @ Harvest Hills Lk. 5-8 min. walk
      The 300 bus is an express bus from the airport to downtown in 20-35 minutes.
      -5 to 15min to Airport by car, buss or bike
      ***Car service cheaper than taxi rides are available ! -Save lots on taxi fares
      -Quick access to YYC No worries of being delayed on the way`}
      latitude={1}
      longitude={2}
    />

    <KeepInMind
      id={uniqueIds.KeepInMind}
      checkIn="3:00 pm - 12:00 am"
      checkOut="11:00 am"
      additionalDetail="Self check-in with lockbox"
      houseRules={[
        {
          title: 'Not suitable for infants (under 2 years)',
          Icon: FaHome,
        },
        {
          title: 'No smoking',
          Icon: FaSmoking,
        },
        {
          title: 'Not suitable for infants (under 2 years)',
          Icon: FaHome,
        },
        {
          title: 'No smoking',
          Icon: FaSmoking,
        },
      ]}
      acknowladge={[
        {
          title: 'Must climb stairs - 1 flight',
          Icon: FaHome,
        },
        {
          title: 'Some spaces are shared - Kitchen/Dining room, Living room upper Deck Bathroom',
          Icon: FaHome,
        },
      ]}
      cancellation={{
        title: 'Free cancellation for 48 hours',
        description: 'After that, cancel up to 24 hours before check-in and get a full refund, minus the service fee.',
      }}
    />

  </Box>
);
