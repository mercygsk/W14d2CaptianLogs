const React = require('react');

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        // const logs = this.props.logs;

        return (
            <div>
                <h1>Logs Index Page</h1>
                <nav>
                    <a href="/logs/new">Create a New log</a>
                </nav>
                <ul>
                    {logs.map((log, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/logs/${log._id}`}>
                                    {log.title} 
                                </a> {' '}
                                is {log.entry} <br></br>
                                {log.shipIsBroken ? `It is ready to use` :   `It is NOT ready to Use`}
                            <br />
                            <a href={`/logs/${log._id}/edit`}> Edit This Log </a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;