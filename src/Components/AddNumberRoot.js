import AddNumber from './AddNumber.js';

export default function AddNumberRoot({ number, onChange, onClick }) {
    return (
        <div>
            <h1>Add Number Root</h1>

            <AddNumber number={ number } onChange={ onChange } onClick={ onClick } />
        </div>
    )
}
