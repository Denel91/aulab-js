import {Button} from "@/components/ui/button.jsx";
import {Plus} from 'lucide-react';
import {Minus} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {useState} from "react";

export default function App() {
    const [countPlayer1, setCountPlayer1] = useState({
        score: 0,
        attempts: 0,
        disable: false
    });

    const [countPlayer2, setCountPlayer2] = useState({
        score: 0,
        attempts: 0,
        disable: false
    });

    const handleStatePlayer1Plus = () => {
        if (countPlayer1.attempts === 3)
            return setCountPlayer1(prev => (
                {
                    ...prev,
                    disable: true
                }
            ))

        setCountPlayer1(prev => {
            return {
                score: prev.score + 1,
                attempts: prev.attempts + 1,
                disable: false
            }
        })
    }

    const handleStatePlayer1Minus = () => {
        if (countPlayer1.attempts === 3)
            return setCountPlayer1(prev => ({
                ...prev,
                disable: true
            }))

        setCountPlayer1(prev => {
            return {
                score: prev.score - 1,
                attempts: prev.attempts + 1,
                disable: false
            }
        })
    }

    const handleStatePlayer2Plus = () => {
        if (countPlayer2.attempts === 3)
            return setCountPlayer2(prev => ({
                ...prev,
                disable: true
            }))

        setCountPlayer2(prev => {
            return {
                score: prev.score + 1,
                attempts: prev.attempts + 1,
                disable: false
            }
        })
    }

    const handleStatePlayer2Minus = () => {
        if (countPlayer2.attempts === 3)
            return setCountPlayer2(prev => ({
                ...prev,
                disable: true
            }))

        setCountPlayer2(prev => {
            return {
                score: prev.score - 1,
                attempts: prev.attempts + 1,
                disable: false
            }
        })
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-indigo-400">Let&#39;s play game</h2>
            <div className="grid grid-cols-2 gap-4 p-4">
                <section className="bg-gray-50">
                    <div className="p-4 flex justify-items-start">
                        <Avatar>
                            <AvatarImage className="h-full w-full rounded-[inherit] object-cover" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"/>
                            <AvatarFallback>Giocatore 1</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-xl ml-2">Giocatore 1</h1>
                            <p className="text-xl ml-2">Score: {countPlayer1.score} </p>
                            <p className="text-xl ml-2">Attempts: {countPlayer1.attempts}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <Button onClick={handleStatePlayer1Plus} disable={countPlayer1.attempts}>Increment<Plus
                            className="ml-2 h-4 w-4"/></Button>
                        <Button onClick={handleStatePlayer1Minus} disable={countPlayer1.attempts} variant="destructive">Decrement<Minus
                            className="ml-2 h-4 w-4"/></Button>
                    </div>
                </section>

                <section className="bg-gray-50">
                    <div className="p-4 flex justify-items-start">
                        <Avatar>
                            <AvatarImage className="h-full w-full rounded-[inherit] object-cover" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"/>
                            <AvatarFallback>Giocatore 2</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-xl ml-2">Giocatore 2</h1>
                            <p className="text-xl ml-2">Score: {countPlayer2.score}</p>
                            <p className="text-xl ml-2">Attempts: {countPlayer2.attempts}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <Button onClick={handleStatePlayer2Plus} disable={countPlayer1.attempts}>Increment<Plus className="ml-2 h-4 w-4"/></Button>
                        <Button onClick={handleStatePlayer2Minus} disable={countPlayer1.attempts} variant="destructive">Decrement<Minus className="ml-2 h-4 w-4"/></Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
