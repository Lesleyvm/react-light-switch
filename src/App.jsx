import React from 'react';
import './App.css';

function App() {
    const [light, toggleLight] = React.useState('false');
    // const toggleLightSwitch = () => {
    //     toggleLight(!light);
    // };
    // kan eventueel direct in de clickHandler worden aangeroepen, wellicht overzichtelijker. Er is dan geen anonieme functie nodig (staat al in const) en de switch kan direct binnen {} worden aangeroepen.

    console.log(light)

    return (
        <main className={light === true ? 'on' : 'off'}>
            <section>
                <div className="dot"></div>
                <button type="button"
                        onClick={() => toggleLight(!light)}>{light ? 'Turn off' : 'Turn on'}</button>
            </section>
        </main>
    );
}

export default App;
