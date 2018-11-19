import React, {PropTypes} from 'react';

const Header = () => {
  return (
    <header className="g-header">
      <nav className="g-nav">
        <ul className="g-nav_list">
          <li className="g-nav_item">
            <a href="#"className="g-nav_link" >チャンネル販売者</a>
          </li>
          <li className="g-nav_item">
            <a href="#">アプリダウンロード</a>
          </li>
          <li className="g-nav_item">
            <a href="#">接続する</a>
          </li>
          <li className="g-nav_item">
            <a href="#">F</a>
          </li>
          <li className="g-nav_item">
            <a href="#">I</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li>
            <a href="#">通知</a>
          </li>
          <li>
            <a href="#">ヘルプ</a>
          </li>
          <li>
            <a href="#">サインアップ</a>
          </li>
          <li>
            <a href="#">サインイン</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

.g-nav {
  min-width: 100%;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f74d18;
  ul li {
    display: inline-block
  }
  a {
    text-decoration: none;
    display: block;
    color: #fff;
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;

    &:hover {
      opacity: 0.8;
    }
  }
}
