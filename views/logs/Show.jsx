const React = require('react')
class Show extends React.Component {
  render () {
   const log = this.props.log
    return (
      <div>
      <h1> Show Page </h1>
      <h2>   <a href={'/logs'}>Back to Index page</a> </h2>
       <h3> The {log.title}  {log.entry} of the ship: {log.shipIsBroken}</h3>
        {log.shipIsBroken ? 'Ship is ready to Use' : 'Ship is not ready to use... Dont touch it' }
      </div>
      );
     }
   }
  module.exports  = Show;