export default function ThreeCol() {
    const groups = [1, 2, 3]; // Array to map over, adjust as needed

    return (
        <div className="grid grid-cols-3">
            {groups.map((group, index) => (
                <div key={index} className="sq">
                    <div className="tl"></div>
                    One
                </div>
            ))}
        </div>
    );
}