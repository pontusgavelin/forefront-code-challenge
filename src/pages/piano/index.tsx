import React from "react"

const keys = [
  { note: "C", type: "white" },
  { note: "C#", type: "black" },
  { note: "D", type: "white" },
  { note: "D#", type: "black" },
  { note: "E", type: "white" },
  { note: "F", type: "white" },
  { note: "F#", type: "black" },
  { note: "G", type: "white" },
  { note: "G#", type: "black" },
  { note: "A", type: "white" },
  { note: "A#", type: "black" },
  { note: "B", type: "white" },
]

const Piano = () => {
  // 🪄 Make magic happen 🪄

  const playNote = (note: string) => {
    console.log(`Playing note: ${note}`)
    // Add sound playback logic here
  }

  // End magic here :'(
  return (
    <div className="piano">
      {keys.map((key) => (
        <button
          key={key.note}
          className={`key ${key.type}`}
          onClick={() => playNote(key.note)}
        >
          {key.note}
        </button>
      ))}
    </div>
  )
}

export default Piano
