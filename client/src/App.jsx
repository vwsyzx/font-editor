import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [showText, setShowText] = useState('')
  const [mood, setMood] = useState(false)
  const [arr, setArr] = useState([
    {id: 71354, font: 'winsome'},
    {id: 123562, font: 'waltograph'},
    {id: 987123, font: 'titanone'},
    {id: 781254, font: 'themightiest'},
    {id: 981354, font: 'theflameproofer'},
    {id: 672135, font: 'righteous'},
    {id: 9123814, font: 'remachine'},
    {id: 872724, font: 'playfair-regular'},
    {id: 12334, font: 'playfair-bold'},
    {id: 1236234, font: 'notosanspaucinhau-regular'},
    {id: 73574, font: 'malboro'},
    {id: 23564, font: 'julioussansone-regular'},
    {id: 856792, font: 'imfellgreatprimesc-regular'},
    {id: 12352412, font: 'ibmplexmono-regular'},
    {id: 123525, font: 'ibmplexmono-extralight'},
    {id: 12314523, font: 'ibmplexmono-bold'},
    {id: 1231252, font: 'handjet'},
    {id: 13125, font: 'handjet-regular'},
    {id: 1231234, font: 'handjet-bold'},
    {id: 14125, font: 'dolliescript'},
    {id: 112351, font: 'cinzeldecorative-regular'},
    {id: 12313, font: 'cinzeldecorative-bold'},
    {id: 14154123, font: 'breeserif-regular'},
    {id: 123672, font: 'bondoniflf-bold'},
    {id: 98367, font: 'badabb'},
    {id: 2348690, font: 'anabell'},
    {id: 2346560, font: 'apple'},
    {id: 23461210, font: 'alexbrush-regular'},
    {id: 9081723, font: 'seabubble'},
    {id: 9008123, font: 'overmovie'},
    {id: 898230, font: 'heritho'},
    {id: 873451, font: 'harabara'},
    {id: 980023, font: 'ghostnight'},
    {id: 897242, font: 'staywork'},
    {id: 123523, font: 'sarcolenta'},
    {id: 45123, font: 'gorine'},
    {id: 2987342, font: 'roughnecks'},
    {id: 93842, font: 'stanbriged'},
    {id: 9812340, font: 'obligately'},
    {id: 8723410, font: 'vascolardo'},
    {id: 904840, font: 'midnight-blackfire'},
    {id: 9834000, font: 'custom'}
  ])
  function Copy(text){
    navigator.clipboard.writeText(text)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(input)
    }, 400)

    return () => clearTimeout(timeout)
  }, [input])

  return (
    <div className='mainCss'>

        <div className='tool'>
          <input type='text' placeholder="Text" value={input} onChange={ev => setInput(ev.target.value)}/>
        </div>
        <div className='fonts-main'>
          {
            showText && input && arr?.map(item => {
              return <div key={item.id} className='font'>
                <div className='top'>
                  <span className='name'>{item.font}</span>
                  <button className='btn' onClick={() => Copy(showText)}>copy</button>
                </div>
                <div className='text-main'>
                  <p className={`text   ${item.font}`}>{showText}</p>
                </div>
              </div>
            })
          }
        </div>

    </div>
  )
}

export default App
