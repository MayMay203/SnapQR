import styles from './ScannerQRCode.module.scss'
import classNames from 'classnames/bind'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)
function ScannerQRCode() {
  const [result, setResult] = useState('')
  const scannerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      scannerRef.current.clear()
      setResult(decodedText)
      console.log(`Code matched = ${decodedText}`, decodedResult)
    }

    function onScanFailure(error) {
      console.log('Failed scan qr code with camera', error)
    }

    if (!scannerRef.current) {
      const scanner = new Html5QrcodeScanner('reader', { fps: 5, qrbox: { width: 250, height: 250 } }, /* verbose= */ false)
      scanner.render(onScanSuccess, onScanFailure)
      scannerRef.current = scanner
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear()
        scannerRef.current = null 
      }
    }
  }, [])

  const handleClickLink = () => {
    window.open(result, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        {result ? (
          <div className={cx('link-wrapper')}>
            <a href={result} className={cx('link')} rel="noopener noreferrer" target="_blank">
              {result}
            </a>
            <div className={cx('actions')}>
              <Button primary onClick={handleClickLink} size='medium'>
                Access Now
              </Button>
            </div>
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>
    </div>
  )
}

export default ScannerQRCode
