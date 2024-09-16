import Button from '~/components/Button'
import styles from './Create.module.scss'
import classNames from 'classnames/bind'
import { CheckIcon } from '~/assets/icons'
import { useRef, useState } from 'react'
import QRCode from 'react-qr-code'

const cx = classNames.bind(styles)
function Create() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const qrCodeRef = useRef(null)
  const canvasRef = useRef(null)

  const handleCancel = () => {
    setValue('')
  }

const handleDownLoad = () => {
  const svgElement = qrCodeRef.current.querySelector('svg')
  if (svgElement) {
    // Convert SVG to string
    const svgData = new XMLSerializer().serializeToString(svgElement)

    // Create a blob from the SVG string
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    // Create an image element and set its source to the SVG blob URL
    const img = new Image()
    img.onload = () => {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      // Dimensions
      canvas.width = img.width
      canvas.height = img.height

      // Draw SVG image on canvas
      context.drawImage(img, 0, 0)

      // Convert canvas to PNG
      const pngUrl = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = pngUrl
      link.download = 'qrcode.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up
      URL.revokeObjectURL(url)
    }
    img.src = url
  }
}

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content-left')}>
        <h2 className={cx('title')}>Link</h2>
        <input
          value={value}
          ref={inputRef}
          type="text"
          className={cx('input-text')}
          placeholder="https://www.youtube.com/watch?v=gybRLeOnjUQ"
          onChange={(e) => {
            setValue(e.target.value.trimStart())
          }}
        />
        <div className={cx('actions')}>
          <Button outline size="medium" onClick={handleCancel}>
            Delete
          </Button>
        </div>
      </div>
      <div className={cx('content-right')}>
        <div className={cx('inner')}>
          <div className={cx('qr-code')} ref={qrCodeRef}>
            <QRCode
              style={{ height: '100%', width: '100%' }}
              bgColor="white"
              fgColor="black"
              value={value.trim() === '' ? ' ' : value}
            />
          </div>
          <div className={cx('row')}>
            <CheckIcon />
            <span className={cx('text')}>Scan me!</span>
          </div>
        </div>
        <div className={cx('action')}>
          <Button primary size="medium" onClick={handleDownLoad}>
            Download
          </Button>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  )
}

export default Create
