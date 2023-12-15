const React = require('react');

class New extends React.Component {
    render () {
        return (
            <div>
                <h1>New Log Page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/logs' method="POST">
                    title: <input type="text" name="title" /><br />
                    entry: < input type="text" name="entry"/> <br />
                    {/* timestamps: < input type="text"   timestamps="  timestamps"/> <br /> */}
                    shipIsNotBroken : <input type="checkbox" name="shipIsBroken"/> <br />
                    <input type="submit" name="" value="Ship Logs"/>
                </form>
            </div>
        )
    }
}

module.exports = New;