import React, { useState } from 'react';

import btnLeft from '../assets/angle-left-solid.svg';
import btnRight from '../assets/angle-right-solid.svg';
import bca from '../assets/bca.jpeg';
import cimb from '../assets/cimb.png';
import addCard from '../assets/addCard.png';
import support from '../assets/support.png';
import dragon from '../assets/dragon.jpg';
import titans from '../assets/titans.png';
import yaiba from '../assets/yaiba.png';
import hero from '../assets/hero.png';
import naruto from '../assets/naruto.jpg';
import onepiece from '../assets/onepiece.jpg';
import Chart from '../components/Chart';

export default function Homes () {
  const [month, setMonth] = useState(5)
  const data = ['30Juta', '24Juta', '18Juta', '12Juta', '6Juta', '0']
  const chart = [21, 16, 10, 18, 10, 29, 25, 20, 15, 20, 15, 10]
  const cards = [bca, cimb]
  const comic = [dragon, titans, yaiba, hero, naruto, onepiece]
  const test = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const btnMonth = (n) => {
    if (n > 0) month === 5 ? setMonth(5) : setMonth(month + 1)
    else month === 0 ? setMonth(0) : setMonth(month - 1)
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '70%', marginRight: '40px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
          <h1>Welcome To The Dashboard</h1>
          <input type="text" placeholder="Search" style={{fontSize: '15px', borderRadius: '5px', maxWidth: '80px', padding: '5px', backgroundColor: '#d1e8fb'}}/>
        </div>
        <div style={{marginBottom: 50}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '-20px'}}>
            <h3>Sales</h3>
            <div style={{display: 'flex', alignItems: 'center', width: 200, justifyContent: 'space-between'}}>
              <div onClick={() => btnMonth(-1)}>
                <img alt="" src={btnLeft} style={{height: '20px', width: '20px', borderRadius: '5px', backgroundColor: month === 0 ? '#e0f1fd' : 'white', boxShadow: month === 0 ? 'inset -1px -1px 5px rgba(209, 232, 251, 0.5), inset 1px 1px 5px rgba(0, 0, 0, 0.5)' : '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)', cursor: 'pointer'}} />
              </div>
              <h3 style={{margin: '0'}}>{test[month]} 2020</h3>
              <div onClick={() => btnMonth(1)}>
                <img alt="" src={btnRight} style={{height: '20px', width: '20px', borderRadius: '5px', backgroundColor: month === 5 ? '#e0f1fd' : 'white', boxShadow: month === 5 ? 'inset -1px -1px 5px rgba(209, 232, 251, 0.5), inset 1px 1px 5px rgba(0, 0, 0, 0.5)' : '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)', cursor: 'pointer'}} />
              </div>
            </div>
          </div>
          <Chart data={data} chart={chart} month={month} />
        </div>
        <div style={{display: 'flex', height: 100, marginBottom: 50}}>
          <div style={{width: '20%'}}>
            <h3 style={{marginTop: -5}}>Payment Methods</h3>
            <span>Last Modified</span><br/>
            <span style={{fontWeight: 'bolder'}}>06 April 2020</span>
          </div>
          <div style={{display: 'flex', height: '100%', width: '80%', justifyContent: 'space-between'}}>
            {cards.map((card, i) => (
              <div style={{height: '100%', width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={card}>
                <img src={card} alt={i} style={{height: '100%', width: '100%', borderRadius: 20, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)'}}/>
              </div>
            ))}
            <div style={{height: '100%', width: '30%', borderRadius: 20, boxShadow: 'inset -1px -1px 5px rgba(209, 232, 251, 0.5), inset 1px 1px 5px rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <span style={{padding: 15, paddingRight: 40, paddingLeft: 40, borderRadius: 15, borderStyle: 'dashed', textAlign: 'center'}}> <img src={addCard} style={{width: 20, height: 20}} alt="add"/> <br/>Add Card</span>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: '#fafafa', borderRadius: 30, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)', marginBottom: 20}}>
          <div style={{padding: 30}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: -20, marginBottom: 10}}>
              <h3>Campaign Timeline</h3>
              <div style={{display: 'flex'}}>
                <div style={{backgroundColor: 'rgb(22, 97, 158)', padding: 10, borderRadius: 10, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)'}}>
                  <span style={{color: '#fafafa'}}>+ Add Campaign</span>
                </div>
                <div style={{padding: 10, borderRadius: 10}}>
                  <span style={{fontWeight: 'bolder'}}>...</span>
                </div>
              </div>
            </div>
            <div style={{backgroundColor: '#e0f1fd', borderRadius: 15, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)', paddingLeft: 30, paddingRight: 30, marginBottom: 20}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Title: Beli 1 Gratis 1</h3>
                <h3>Budget: Rp 300.000,-</h3>
              </div>
            </div>
            <div style={{backgroundColor: '#e0f1fd', borderRadius: 15, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)', paddingLeft: 30, paddingRight: 30, marginBottom: 20}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Title: Beli 1 Gratis 1</h3>
                <h3>Budget: Rp 300.000,-</h3>
              </div>
            </div>
            <div style={{backgroundColor: '#e0f1fd', borderRadius: 15, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)', paddingLeft: 30, paddingRight: 30, marginBottom: 20}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Title: Beli 1 Gratis 1</h3>
                <h3>Budget: Rp 300.000,-</h3>
              </div>
            </div>
            <div style={{backgroundColor: '#e0f1fd', borderRadius: 15, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)', paddingLeft: 30, paddingRight: 30, marginBottom: 20}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Title: Beli 1 Gratis 1</h3>
                <h3>Budget: Rp 300.000,-</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{width: '30%', marginRight: 40}}>
        <div style={{display: 'flex'}}>
          <div style={{marginBottom: 80, width: '40%', cursor: 'pointer', position: 'relative'}}>
            <div style={{backgroundColor: 'white', borderRadius: '10px', padding: '5px 10px', width: '100%', boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)'}}>
              <h4 style={{lineHeight: '0.1'}}>Need Help?</h4>
              <p style={{fontSize: '13px', lineHeight: '0.5'}}>24/7 Support Center</p>
            </div>
            <div style={{borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '20px solid white', position: 'absolute', top: '50%', right: -40}}></div>
          </div>
          <img src={support} alt="support" style={{width: '50%'}} />
        </div>
        <div style={{backgroundColor: '#fafafa', marginBottom: 10, borderRadius: 30, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)'}}>
          <div style={{padding: 30}}>
            <div>
              <h4 style={{marginTop: 0}}>Customer Engagement</h4>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                <span>Campaign Visit</span><br/>
                <span>900</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                <span>People Engaged</span><br/>
                <span>421</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                <span>Clicks (%)</span><br/>
                <span>46.7</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                <span>Sold (%)</span><br/>
                <span>73</span>
              </div><div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                <span>Conversion (%)</span><br/>
                <span>73</span>
              </div>
            </div>
            <div style={{borderStyle: 'solid', borderColor: 'rgb(22, 97, 158)', borderRadius: 5}}></div>
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h4>Top Listings</h4>
                <div style={{backgroundColor: 'rgb(22, 97, 158)', padding: 5, borderRadius: 10, cursor: 'pointer'}}>
                  <span style={{color: '#fafafa', fontWeight: 'bolder'}}>See more</span>
                </div>
              </div>
              <div>
                {comic.map((list, i) => (
                  <img alt={i} key={i} src={list} style={{width: '45%', height: 150, borderRadius: 20, marginRight: i % 2 === 0 ? 25 : 0, marginBottom: 10, boxShadow: '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)'}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}