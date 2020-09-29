import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of Place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
        <SearchResult
          img='https://www.savoy.com.au/wp-content/uploads/2018/10/airbnb-introvert-GUIDE0316.jpg'
          location='Private room in center of London'
          title='Stay at this spacious Edwardian House'
          description='1 guest . 1.5 shared bthrooms . wifi . kitchen . Free washing machine'
          star={4.73}
          price='$200/night'
          total='$250 total'
        />

        <SearchResult
          img='https://cnet3.cbsistatic.com/img/z_KMYwZJD72f7rfGzoVni045dh4=/940x528/2016/10/26/b6d2ee01-cdc9-41c8-8724-97ba18bb6074/20161025164823.jpg'
          location='Private room in center of London'
          title='Stay at this spacious Edwardian House'
          description='1 guest . 1.5 shared bthrooms . wifi . kitchen . Free washing machine'
          star={4.73}
          price='$200/night'
          total='$250 total'
        />
        <SearchResult
          img='https://bridgesandballoons.com/Images/2019/04/AirBnB-Plus-876x584.jpg'
          location='Private room in center of London'
          title='Stay at this spacious Edwardian House'
          description='1 guest . 1.5 shared bthrooms . wifi . kitchen . Free washing machine'
          star={4.73}
          price='$200/night'
          total='$250 total'
        />
        <SearchResult
          img='https://www.savoy.com.au/wp-content/uploads/2018/10/airbnb-introvert-GUIDE0316.jpg'
          location='Private room in center of London'
          title='Stay at this spacious Edwardian House'
          description='1 guest . 1.5 shared bthrooms . wifi . kitchen . Free washing machine'
          star={4.73}
          price='$200/night'
          total='$250 total'
        />
      </div>
    </div>
  );
};

export default SearchPage;
