import React, { FC } from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core/';
import InfoCard from '../ui/Card/InfoCard';

// Dummy content to test styles
// TODO:: Use api call for this, maybe from here https://punkapi.com/
const dummyContent = [
  {
    id: 192,
    name: 'Punk IPA 2007 - 2010',
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description:
      "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    image_url:
      'https://images.pexels.com/photos/1267289/pexels-photo-1267289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 234,
    name: 'Neon Overlord',
    tagline: 'Mango And Chilli IPA',
    description:
      'The Overlord of mango and chili IPA’s packs a fruity punch and then some. Pours a slightly hazy orange. A tropical fruit assault on the nose, with mango, pineapple, apricots and citrus. Hints of chili and sweet malts follow. Fruit dissipates to a chili kick, not hot but definitely there, followed by a long bitter finish. All hail to the hot tempered sweet toothed Lord.',
    image_url:
      'https://images.pexels.com/photos/2410165/pexels-photo-2410165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 289,
    name: 'Hello My Name Is Lieke',
    tagline: 'Orange Infused Double IPA.',
    description:
      'Brewed exclusively for the Dutch market, this Hello My Name brew features a twist of flavour inspired by the Netherlands.',
    image_url: null,
  },
  {
    id: 19,
    name: 'Hello My Name Is Mette-Marit',
    tagline: 'Lingonberry Double IPA.',
    description:
      "We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.",
    image_url:
      'https://images.pexels.com/photos/3326710/pexels-photo-3326710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

// Use material-ui as we woudl styled-components
// https://material-ui.com/styles/api/#styled-component-styles-options-component
const GridWrapper = styled('div')({
  margin: '2.5rem 0',
});

const Main: FC = (): JSX.Element => {
  return (
    <Container>
      <GridWrapper>
        <Grid container spacing={4}>
          {dummyContent.map((beer) => {
            return (
              <Grid item key={beer.id} xs={12} sm={6} md={4}>
                <InfoCard {...beer} />
              </Grid>
            );
          })}
        </Grid>
      </GridWrapper>
    </Container>
  );
};

export default Main;
