export default function Header() {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-r from-indigo-600 from-10% via-sky-600 via-30% to-emerald-600 to-90%">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="header_img" className="absolute inset-0 -z-10 h-full w-full object-cover grayscale opacity-25"/>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">TODO App</h2>
                <p className="mt-6 mb-6 text-2xl leading-8 text-white font-medium">
                    Tutto ciò che annoti apparirà all’istante sullo schermo.
                </p>
            </div>
        </div>
    );
}

