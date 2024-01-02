'use client'

import ExampleServer from './ExampleServer'

function ExampleClient () {
  console.log('Example Client Output!')
  return (
    <>
      <div>ExampleClient</div>
      <ExampleServer />
    </>
  )
}

export default ExampleClient
