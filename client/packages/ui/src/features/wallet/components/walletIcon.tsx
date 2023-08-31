import React from 'react'
import { Box } from '@chakra-ui/react'

export const WalletIcon = ({ ...props }) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5028 11.7542C11.8391 11.9152 12.2071 11.9992 12.58 12H14.4133C14.4575 12 14.4999 12.0176 14.5311 12.0488C14.5624 12.0801 14.58 12.1225 14.58 12.1667V13.8333C14.58 14.2754 14.4044 14.6993 14.0918 15.0118C13.7792 15.3244 13.3553 15.5 12.9133 15.5H2.91329C2.29445 15.5 1.70096 15.2542 1.26337 14.8166C0.825789 14.379 0.579956 13.7855 0.579956 13.1667V2.83333C0.579956 2.21449 0.825789 1.621 1.26337 1.18342C1.70096 0.745833 2.29445 0.5 2.91329 0.5H10.2466C11.5333 0.5 12.58 1.24667 12.58 2.16667V2.30667C12.58 2.35087 12.5624 2.39326 12.5311 2.42452C12.4999 2.45577 12.4575 2.47333 12.4133 2.47333H3.57996C3.44735 2.47333 3.32017 2.52601 3.2264 2.61978C3.13263 2.71355 3.07996 2.84073 3.07996 2.97333C3.07996 3.10594 3.13263 3.23312 3.2264 3.32689C3.32017 3.42066 3.44735 3.47333 3.57996 3.47333H12.9133C13.3548 3.47509 13.7777 3.65125 14.0899 3.96343C14.402 4.27561 14.5782 4.69851 14.58 5.14V6.64C14.58 6.72841 14.5448 6.81319 14.4823 6.8757C14.4198 6.93821 14.335 6.97333 14.2466 6.97333H12.6533C12.0673 6.96582 11.4966 7.16067 11.0375 7.52501C10.5784 7.88936 10.2591 8.4009 10.1333 8.97333C10.0559 9.33807 10.0609 9.71548 10.1479 10.078C10.2349 10.4406 10.4016 10.7792 10.636 11.0692C10.8704 11.3591 11.1666 11.5932 11.5028 11.7542ZM12.58 8H14.58C14.8154 8.03977 15.0288 8.16244 15.1816 8.34585C15.3344 8.52925 15.4166 8.76128 15.4133 9V10C15.4166 10.2387 15.3344 10.4707 15.1816 10.6542C15.0288 10.8376 14.8154 10.9602 14.58 11H12.58C12.1821 11 11.8006 10.842 11.5193 10.5607C11.238 10.2794 11.08 9.89783 11.08 9.5C11.08 9.10218 11.238 8.72064 11.5193 8.43934C11.8006 8.15804 12.1821 8 12.58 8Z"
      />
    </Box>
  )
}