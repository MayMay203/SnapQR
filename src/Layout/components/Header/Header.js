import images from '~/assets/images'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { config } from '~/config'

const cx = classNames.bind(styles)
function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo-wrapper')}>
        <img src={images.logo} alt="logo" className={cx('logo')}></img>
      </div>
      <nav className={cx('links')}>
        <NavLink
          to={config.routes.scanner}
          className={(nav) => {
            return cx('link-item', { active: nav.isActive })
          }}
        >
          Scanner
        </NavLink>
        <NavLink
          to={config.routes.create}
          className={(nav) => {
            return cx('link-item', { active: nav.isActive })
          }}
        >
          Generator
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
