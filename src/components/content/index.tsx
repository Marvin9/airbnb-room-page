import React from 'react';
import {
  FaHome,
  FaBell,
  FaLandmark,
  FaDollarSign,
  FaBed,
} from 'react-icons/fa';

import { Header } from './components/header';
import { Features } from './components/features';
import { AdditionalDetails } from './components/additionalDetails';
import { Amenities } from './components/amenities';
import { SleepingArrangements } from './components/sleepingArrangements';
import { Reviews } from './components/reviews';

import { Divider } from '../../shared/components';

export const Content: React.FC = () => (
  <>
    <Header
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

    <Divider />

    <Features
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

    <Divider />

    <AdditionalDetails
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

    <Divider />

    <Amenities
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

    <Divider />

    <SleepingArrangements
      title="Bedroom 1"
      description="1 queen bed"
      Icon={FaBed}
    />

    <Divider />

    <Reviews />
  </>
);
