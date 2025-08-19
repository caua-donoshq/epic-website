"use client"

import { Gravity, MatterBody } from "@/components/ui/gravity"

export default function GravityDemo() {
  return (
    <div className="w-full h-[600px] flex flex-col relative bg-gray-50/50 rounded-xl overflow-hidden">
      <div className="pt-20 text-6xl sm:text-7xl md:text-8xl text-black w-full text-center font-bold">
        Interactive
      </div>
      <p className="pt-4 text-base sm:text-xl md:text-2xl text-black/80 w-full text-center">
        components powered by physics:
      </p>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="20%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:cursor-grab px-8 py-4 shadow-lg">
            drag me
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="35%"
          y="20%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:cursor-grab px-8 py-4 shadow-lg">
            physics
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="15%"
          angle={15}
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:cursor-grab px-8 py-4 shadow-lg">
            matter.js
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="70%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:cursor-grab px-8 py-4 shadow-lg">
            react
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="25%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full hover:cursor-grab px-8 py-4 shadow-lg">
            fun!
          </div>
        </MatterBody>
      </Gravity>
    </div>
  )
}