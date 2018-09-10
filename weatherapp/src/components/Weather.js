import React from 'react';

class Weather extends React.Component {
  render(){
    return(
      <div>
      {/*in order to not show the info titles before the user types some iput
        we cannot use If statement if React, so we can do a condition using the && operator*/}

        {/*this means if {this.props.city === true && this.props.country ===true} then render the paragraph*/}


        {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

{/*Because the Weather component, do not needs State, we should use a stateless components
using a const followed by the name of the component like this:
const Weather = (props) => {
  return(
  <div>

    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>humidity: {props.humidity}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);
}
  */}
export default Weather;
