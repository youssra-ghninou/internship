import { InformationCircleIcon } from '@heroicons/react/24/solid'
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react'
import { Fragment, useState } from 'react'

export default function DialogPopUp({ text, offerTitle, offerDescription }) {
  const [size, setSize] = useState(null)

  const handleOpen = (value) => setSize(value)

  return (
    <Fragment>
      <div className='mb-3 flex gap-3'>
        <Button
          fullWidth
          className='flex items-center justify-center gap-3 bg-cyan-500 text-white'
          onClick={() => handleOpen('xxl')}
        >
          <InformationCircleIcon strokeWidth={2} className='h-5 w-5' />
          {text}
        </Button>
      </div>
      <Dialog open={size === 'xxl'} size={size || 'md'} handler={handleOpen}>
        <DialogHeader>{offerTitle}</DialogHeader>
        <DialogBody divider>{offerDescription}</DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={() => handleOpen(null)}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant='gradient'
            color='green'
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}
