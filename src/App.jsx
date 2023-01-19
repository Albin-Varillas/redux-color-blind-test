import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { guessColor } from "./colorSlice"

export default function App() {
    const colors = useSelector((state) => state.color.colors)
    const record = useSelector((state) => state.color.record)
    const dispatch = useDispatch()
    console.log(colors)
    return (
        <div className="p-10">
            <h1 className="text-xl font-bold text-center">
                Kolla ifall du är blind
            </h1>
            <div className="flex bg-red-500 p-1 h-96 gap-1">
                {colors.map((color) => (
                    <div
                        className="flex-1"
                        style={{ background: color }}
                        onClick={() => {
                            dispatch(guessColor(color))
                        }}
                    ></div>
                ))}
            </div>
            {record.map((r) => (
                <h2>{r}</h2>
            ))}
        </div>
    )
}
