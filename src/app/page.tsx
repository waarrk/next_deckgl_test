"use client"
import Image from 'next/image'
import DeckGLMap from '../app/DeckGLMap'



export default function Home() {
  // 右にサイドバーを表示　左に地図を表示
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/4 h-screen">
          <h1>Side Bar</h1>
        </div>
        <div className="w-3/4 h-screen">
          <DeckGLMap />
        </div>
      </div>
    </div>
  );
}
