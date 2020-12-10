import React from 'react';
import Cookies from 'js-cookie';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        Cookies.remove('user');
        window.location='/';
    }
}

export default Logout;