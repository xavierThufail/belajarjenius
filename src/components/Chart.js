import React from 'react';

export default function Chart ({ data, chart, month }) {
  let compare = chart[month] > chart[month - 1] ? `+ ${(chart[month] - chart[month - 1]) / chart[month - 1] * 100}%` : `- ${(chart[month - 1] - chart[month]) / chart[month] * 100}%`;
  
  return (
    <div style={{display: 'flex', height: '200px'}}>
      <div style={{width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div>
          <span style={{fontSize: '25px', fontWeight: 'bolder'}}>Rp. {chart[month]}.000.000,-</span>
          <p style={{marginTop: '5px'}}><span style={{color: 'rgb(36, 214, 125)'}}>{month === 0 ? 0 : compare}</span> than last month</p>
        </div>
        <div style={{paddingBottom: 40}}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 10}}>
            <div style={{borderRadius: 10, backgroundColor: 'rgb(35, 156, 255)', height: 15, width: 15, marginRight: 10}}></div>
            <span>Last Month</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{borderRadius: 10, backgroundColor: 'rgb(22, 97, 158)', height: 15, width: 15, marginRight: 10}}></div>
            <span>Running Month</span>
          </div>
        </div>
      </div>
      <div style={{width: '70%', position: 'relative'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
          {data.map((text, i) => (
            <div style={{display: 'flex', alignItems: 'center'}} key={i}>
              <div style={{width: '10%'}}>
                <span>{text}</span>
              </div>
              <div style={{width: '90%', backgroundColor: 'pink', borderWidth: 1, borderStyle: 'solid', height: 0}}></div>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', height: '100%', width: '100%', zIndex: 999, position: 'absolute', top: 0}}>
          <div style={{width: '10%'}}></div>
          <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', marginLeft: 5, alignItems: 'flex-end', padding: 10}}>
            {chart.map((box, i) => (
              <div key={i} style={{height: (box/30 * 100 + '%'), width: '7%', backgroundColor: i < month - 1 ? '#fafafa' : i === month - 1 ? 'rgb(35, 156, 255)' : i === month ? 'rgb(22, 97, 158)' : i > month && i < 6 ? '#fafafa' : '#e0f1fd', borderRadius: 10, boxShadow: i < 6 ? '-1px -1px 5px rgba(209, 232, 251, 1), 1px 1px 5px rgba(0, 0, 0, 0.3)' : 'inset -1px -1px 5px rgba(209, 232, 251, 0.5), inset 1px 1px 5px rgba(0, 0, 0, 0.5)'}}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}