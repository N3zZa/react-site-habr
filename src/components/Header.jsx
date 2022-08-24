import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <Link to={"/"}>
          <h2>
            <span>Telegram</span>
            <span>Labs</span>
          </h2>
        </Link>
      </header>
    );
}

export default Header;
