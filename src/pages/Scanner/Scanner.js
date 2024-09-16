import styles from './Scanner.module.scss'
import classNames from 'classnames/bind'
import { config } from '~/config'
import { GenerateIcon } from '~/assets/icons'
import UploadQRCode from '~/components/UploadQRCode'
import ScannerQRCode from '~/components/ScannerQRCode'
import { useState } from 'react'
import Button from '~/components/Button'

const cx = classNames.bind(styles)
function Scanner() {
  const [type, setType] = useState('Upload')

  return (
    <div className={cx('wrapper')}>
      <div className={cx('selection')}>
        <span className={cx('select-item', { active: type === 'Upload' })} onClick={() => setType('Upload')}>
          Upload QR Code
        </span>
        <span className={cx('select-item', { active: type === 'Scanner' })} onClick={() => setType('Scanner')}>
          Scan QR Code
        </span>
      </div>
      {type === 'Upload' ? <UploadQRCode /> : <ScannerQRCode />}
      <div className={cx('link-wrapper')}>
        <Button to={config.routes.create} leftIcon={<GenerateIcon />} className={cx('generate-link')} outline>
          Generate QR Code
        </Button>
      </div>
    </div>
  )
}

export default Scanner
