import { UploadIcon } from '~/assets/icons/Icon'
import styles from './UploadQRCode.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function UploadQRCode() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
          <input type="file" hidden></input>
          <UploadIcon/>
      </div>
    </div>
  )
}

export default UploadQRCode
