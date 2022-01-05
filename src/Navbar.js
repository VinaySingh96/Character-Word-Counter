import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-black" >
                <div className="container-fluid">
                    <a className="navbar-brand" style={{color:"white"}} href="/" >{props.title}</a>
                    <button style={{backgroundColor:"white"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{color:"white"}} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" style={{color:"white"}} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:"white"}} href="/">Features</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title: 'My Title'
}