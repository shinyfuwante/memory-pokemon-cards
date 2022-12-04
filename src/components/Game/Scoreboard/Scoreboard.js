import React from 'react'

export default function Scoreboard({score, bestScore}) {
  return (
    <>
    <div className = "currentScore">Current Score: {score}</div>
    <div className = "bestScore">Best Score: {bestScore}</div>
    </>
  )
}
