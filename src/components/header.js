import React from 'react'

export default class Header extends React.Component{
    state = {
        color: 'transparent'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 200) {
            this.setState({color: 'black'})
        } else {
            this.setState({color: 'white'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        return(
            <header className='main-header'>
                <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='StartBootstrap'/>
                <nav className='menu'>
                    <span className='menu-span'>SERVICES</span>
                    <span className='menu-span'>PORTFOLIO</span>
                    <span className='menu-span'>ABOUT</span>
                <span className='menu-span'>TEAM</span>
                    <span className='menu-span'>CONTACT</span>
                </nav>
                <div className='dropdown' onClick={this.toggleDropdown}>MENU</div>
                {this.state.dropdownView
                    ? (
                        <nav className='mobile-menu'>
                        <span className='menu-span'>SERVICES</span>
                        <span className='menu-span'>PORTFOLIO</span>
                        <span className='menu-span'>ABOUT</span>
                        <span className='menu-span'>TEAM</span>
                        <span className='menu-span'>CONTACT</span>
                        </nav>
                    )
                : null}
            </header>
        )
    }
}