import Button from '~/components/Button'
import styles from './Create.module.scss'
import classNames from 'classnames/bind'
import { CheckIcon } from '~/assets/icons'
import { useRef, useState } from 'react'
import images from '~/assets/images'

const cx = classNames.bind(styles)
function Create() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(images.qrcodeDefault)
  const inputRef = useRef(null)

  const handleCancel = () => {
    setValue('')
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
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={cx('actions')}>
          <Button outline size="medium" onClick={handleCancel}>
            Cancel
          </Button>
          <Button primary size="medium">
            Generate
          </Button>
        </div>
      </div>
      <div className={cx('content-right')}>
        <div className={cx('inner')}>
          <div className={cx('qr-code')}>
            <img src={result} alt="qr-code" className={cx('qr-code-img')} />
          </div>
          <div className={cx('row')}>
            <CheckIcon />
            <span className={cx('text')}>Scan me!</span>
          </div>
        </div>
        <div className={cx('action')}>
          <Button primary size="medium">
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Create
