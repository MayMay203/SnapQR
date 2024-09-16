import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)
function Button({ primary, outline, to, href, onClick, children, leftIcon, rightIcon, className,size, ...rest }) {
  let Component = 'button'
  const props = {
    to,
    href,
    onClick,
    ...rest,
  }
  if (to || href) {
    Component = Link
  }

  return (
    <Component className={cx('wrapper', { primary: primary, outline: outline, [className]:className, [size]:size})} {...props}>
      <span className={cx('icon')}>{leftIcon}</span>
      {children}
      <span className={cx('icon')}>{rightIcon}</span>
    </Component>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
}
export default Button
