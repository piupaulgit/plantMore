import React from 'react'
import Input from '../inputs/Input'
import Modal from './Modal'

const LoginModal = () => {
    const bodyContent = (
        <div className="flex flex-col gap-4">
          <Input
            id="email"
            label="Email"
            disabled={false}
            required
            />
        </div>
      )
    
      const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
          <p>Footer</p>
        </div>
      )
  return (
    <Modal
      disabled={false}
      isOpen={true}
      title="User Login"
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal