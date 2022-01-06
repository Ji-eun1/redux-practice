

export default function DisplayNumber({ number }) {
    return (
        <div>
            <h1>Display Number</h1>
            
            {/* 인풋 박스 */}
            <input type="text" value={ number } readOnly></input>
        </div>
    )
}
