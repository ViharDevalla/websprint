import React from 'react'
import Data from './Data'
import Single from './ItemSingle'

function SingleCarOrHome() {
  return (
    <div>
      {Data.map((datas, index) => {
        return (
          <Single
            key={index}
            title={datas.title}
            fButton={datas.fButton}
            sButton={datas.sButton}
            car={datas.car}
          />
        )
      })}
    </div>
  )
}

export default SingleCarOrHome