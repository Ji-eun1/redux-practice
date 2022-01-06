import DisplayNumber from './DisplayNumber.js';

export default function DisplayNumberRoot({ number }) {
    return (
        <div>
            <h1>Display Number Root</h1>

            <DisplayNumber number={ number } />
        </div>
    )
}
