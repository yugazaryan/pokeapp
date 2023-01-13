import React from 'react';
import { Button } from 'react-bootstrap';

import Card from "react-bootstrap/Card";
import LinkContainer from 'react-router-bootstrap/LinkContainer';

import {Heart, HeartFill} from 'react-bootstrap-icons';

const PokemonCard = ( {name, image, pokemonName, type, fav, favClick} ) => {
    return (
        
            <Card className={type} bg="dark" text="light" key={name}>
                <Card.Header className='d-flex justify-content-between'>{name}
                {fav ? (
                  <HeartFill onClick={favClick} size="30" color='red' />
                ) : (
                  <Heart onClick={favClick} size="30" color="white" />
                )}
                </Card.Header>

                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={image}
                  />
                  <LinkContainer to={`/${pokemonName}`}>
                  <Button variant='outline-secondary' size='sm'>Details</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
    );
};

export default PokemonCard;