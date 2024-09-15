import { UploadIcon } from '~/assets/icons/Icon'
import styles from './UploadQRCode.module.scss'
import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { Html5Qrcode } from 'html5-qrcode'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)
function UploadQRCode() {
  const fileRef = useRef(null)
  const [link, setLink] = useState('')
  const [selectedFile, setSelectedFile] = useState()
  const navigate = useNavigate()

  const handleUpload = () => {
    fileRef.current.click()
  }

  const handleChooseQR = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }

  const handleCancel = () => {
    setSelectedFile(null)
    setLink('')
    navigate('/')
  }

  const handleScan = () => {
    const html5Qrcode = new Html5Qrcode('reader')
    html5Qrcode
      .scanFile(selectedFile, true)
      .then((decodedText) => {
        setLink(decodedText)
      })
      .catch(() => toast.error('Failed to scan this image. Please try again!'))
  }

  const handleClickLink = () => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className={cx('wrapper')}>
      <div id="reader" hidden></div>
      <input type="file" ref={fileRef} onChange={handleChooseQR} accept="image/*" hidden></input>
      <div className={cx('inner')}>
        {!selectedFile && (
          <div className={cx('upload')} onClick={handleUpload}>
            {' '}
            <UploadIcon />
          </div>
        )}
        {selectedFile && !link && (
          <img id="qr-code" src={URL.createObjectURL(selectedFile)} className={cx('qr-code')} alt="qr-code"></img>
        )}
        {selectedFile && !link && (
          <div className={cx('actions')}>
            <Button outline size="medium" onClick={handleCancel}>
              Cancel
            </Button>
            <Button primary size="medium" onClick={handleScan}>
              Scan
            </Button>
          </div>
        )}

        {link && (
          <div className={cx('link-wrapper')}>
            <a href={link} className={cx('link')} rel="noopener noreferrer" target="_blank">
              {link}
            </a>
            <div className={cx('actions')}>
              <Button outline onClick={handleCancel}>
                Cancel
              </Button>
              <Button primary onClick={handleClickLink}>
                Access Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadQRCode
