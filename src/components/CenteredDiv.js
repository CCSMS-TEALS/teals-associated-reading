import React from 'react'

export const CenteredDiv = ({children}) =>
(<div style={{
  width: '50%',
  margin: "0 auto",
  textAlign: "center"
  }}>{children}</div>
)