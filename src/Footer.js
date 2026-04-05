import React from 'react'

export const Footer = ({ length }) => {
    const year = new Date().getFullYear();
  return (
    <footer>
      <div>Copyright &copy; {year} My App. All rights reserved.</div>
      <div>Total items: {length}</div>
    </footer>
  )
}
