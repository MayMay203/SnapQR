import { CameraIcon } from '~/assets/icons/Icon'
import styles from './ScannerQRCode.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function ScannerQRCode() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <input type="file" hidden></input>
        <CameraIcon />
      </div>
    </div>
  )
}

export default ScannerQRCode
